const jwt = require('jsonwebtoken')
const verifytoken = (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message:"Access Denied, No Token Provided"
        })
    }
    try{
        const decoded = jwt.verify(token.split(" ")[1],"Secret-Key");
        req.user = decoded;
        next()
    }
    catch(error){
        res.status(401).json({
            message: "Invalid Token"
        })
    }
} 
module.exports = {verifytoken}