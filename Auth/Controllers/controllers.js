const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
/*Register User*/
const register = async (req,res)=>{
    const {username,email,password} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
           return res.status(400).json({message : "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const User = await User.create({
            username,
            email,
            password : hashedPassword
        })
        const token = jwt.sign({ id : User._id },"Secret_Key",{expiresIn : "1d"})
        res.status(201).json({message : "User registered Successfully",token})
    }catch (error){
        res.status(500).json({message : "Internal Server Error"})
    }
};
/*Login User*/
const loginUser = async(req,res)=>{
    try{
        const{email,password}= req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid Email or Password"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid Email or Password"})
        }
        const token = jwt.sign({id: user._id},"Secret_Key",{expiresIn : "1d"})
        res.json({token});
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
};
/*Profile*/
const getProfile = async (req,res)=>{
    const user = await User.findById(req.user.id).select("-password")
    res.json({user})
};
module.exports = {
    register,
    loginUser,
    getProfile
};