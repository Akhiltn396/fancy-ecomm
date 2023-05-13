const express = require("express");
const User = require("../models/User");

const authRouter = express.Router();
const CryptoJs = require("crypto-js");
const jwt = require('jsonwebtoken');
const generateToken = require("../utils/generateToken");


//REGISTER

authRouter.post("/register", async (req, res) => {
  try {
    console.log(process.env.PASS_SEC);
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

    authRouter.post("/login", async (req, res) => {
        const { username,password } = req.body;

        try {


        const user = await User.findOne({
          username,
        });

        !user && res.status(401).json("Wrong credentials");
        const hashedPassword = CryptoJs.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );

        const OriginalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
        OriginalPassword !== password && res.status(401).json("Wrong Credentials");


const {   ...others} = user._doc //This is because mongodb storing documents inside doc.

        res.status(200).json({...others,token:generateToken(user._id,user.isAdmin),});
      } catch (error) {
        res.status(500).json(error);
      }
    });


module.exports = authRouter;
