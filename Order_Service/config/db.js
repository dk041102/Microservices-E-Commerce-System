const mongoose = require('mongoose')
const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.Mongo_URI);
        console.log("Database connected");
    }
    catch(error){
        console.error(error);
    }
}
module.exports = connectDb;