const express = require("express")
const app= express();
const mongoose = require("mongoose")
const dbconnect = require('./config/DbConnect');
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/productRouters");
const cartRouter = require("./routes/cartRoutes");
const orderRouter = require("./routes/orderRoutes");
const stripeRouter = require("./routes/Stripe");
const cors = require('cors')
dotenv.config()
dbconnect.Dbconnect()
app.use(cors());

app.use(express.json())
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/products',productRouter)
app.use('/api/carts',cartRouter)
app.use('/api/orders',orderRouter)
app.use('/api/stripe',stripeRouter)

app.listen(process.env.PORT || 3002,()=>{
    console.log("Backend server is running");
})