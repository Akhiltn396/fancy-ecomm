const express = require("express");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/isLogin");
const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { find } = require("../models/User");

const cartRouter = express.Router();

//CREATE
cartRouter.post("/", verifyTokenAndAuthorization, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE
cartRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});


//DELETE
cartRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET CART
cartRouter.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({userId: req.params.userid});

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //GET ALL
cartRouter.get('/',verifyTokenAndAdmin, async (req,res)=>{
    try {
        const carts  = await find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = cartRouter;
