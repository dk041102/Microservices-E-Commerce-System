const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const paymentRoutes = require("./routes/paymentRoutes")
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())
app.use("/payments",paymentRoutes);
app.use("/",(req,res)=>{
    res.send("Welcome to payment service")
});
const Port = process.env.PORT;
app.listen(Port,()=>{
    console.log("Payment service is running on port " + Port)
});
