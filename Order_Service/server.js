const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const connectDb = require('./config/db');
const orderRoutes = require('./routes/orderRoutes')
dotenv.config();

const app = express();

app.use(cors())
app.use(express.json())
connectDb();
const Port = process.env.PORT ;

app.listen(Port,() =>{
    console.log("This server is working on port" + Port);
})
