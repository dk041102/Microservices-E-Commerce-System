const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDb = require("./config/db")
const authroutes = require("./Routes/authRoutes")

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())
connectDb();

//app.use("/auth", authRoutes)

const Port = 3001;
app.listen(Port,()=>{
    console.log(`This service is working on ${Port}`)
});
