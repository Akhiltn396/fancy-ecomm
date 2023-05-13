const mongoose=require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

module.exports.Dbconnect=async ()=>{
   try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('db connceted');
   } catch (error) {
    console.log('db failed',error);
   }
}
