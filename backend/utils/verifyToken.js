const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  //console.log(tokens);
  return jwt.verify(token, process.env.JWT_SEC, (err, decoded) => {
    console.log(decoded);

    if (err) {
     res.status(403).json("Token is not found")
    } else {

      return decoded;

    }
  });
};
module.exports = verifyToken;
