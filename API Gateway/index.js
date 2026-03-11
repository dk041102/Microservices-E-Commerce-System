const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const gatewayRoutes = require("./Routes/gatewayRoutes")
dotenv.config();
const app = express()
app.use(cors())
app.use(express.json)
app.use(morgan("dev"))

app.get("/",(req,res)=>{
    res.send("API Gateway Running")
})

app.use("/api",gatewayRoutes)

const Port = 3000
app.listen(Port,()=>{
    console.log(`This is responding to the ${Port}`)
})