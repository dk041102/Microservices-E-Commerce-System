const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const productRoutes = require('./Routes/productRoutes')

dotenv.config()
const app = express();

app.use(cors())
app.use(express.json())

connectDb();

app.use('/products',productRoutes)
app.get('/',(req,res) =>{
    res.send("This is product service")
});
const Port = 3003;
app.listen(Port,()=>{
    console.log(`This service is working on ${Port}`)
});
