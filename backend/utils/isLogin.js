
const getTokenFromHeader = require("./getTokenFromHeader");
const verifyToken = require("./verifyToken");

const isLogin = (req,res,next) =>{
    //get token from the header
    const token = getTokenFromHeader(req);

    //verify
     const decodedUser=verifyToken(token)
     console.log(decodedUser);

     //save user into req object
     req.user =  decodedUser
      //console.log(req.user.id);
     console.log(req.user);

     if(!decodedUser){
        return next( 'Invalid/Expired Token,PLease Login Again',404)
     }
     next()

}

const verifyTokenAndAuthorization = (req,res,next) =>{
isLogin(req,res,()=>{
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }else{
        res.status(403).json("You are not allowed to do that")
    }
})

}

const verifyTokenAndAdmin = (req,res,next) =>{
    isLogin(req,res,()=>{
        if ( req.user.isAdmin) {
            next()
        }else{
            res.status(403).json("You are not allowed to do that")
        }
    })

    }
module.exports={isLogin,verifyTokenAndAuthorization,verifyTokenAndAdmin}