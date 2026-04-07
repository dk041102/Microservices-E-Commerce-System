const jwt = require("jsonwebtoken")
const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({
            message:"token not provided"
        })
    }
    try{
        const decoded = jwt.verify(token.split(" ")[1],process.env.JWT_SECRET)
        req.user = decoded
        next();
    }catch(error){
        res.status(401).json({
        message: "Invalid token"
    })
}
}
module.exports = verifyToken