const jwt = require("jsonwebtoken");


const generateToken = (id,isAdmin) =>{
    return jwt.sign({id,isAdmin},process.env.JWT_SEC,{expiresIn:"3d"})
}
console.log(generateToken());

module.exports=  generateToken