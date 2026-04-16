const product = require("../Models/productModel")
/*create Product*/
exports.createProduct = async (req,res)=>{
    try{
        const product = await product.create(req.body);
        res.status(201).json({message: "Product created successfully",product})
    }
    catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
};
/*Get All Products*/
exports.getProducts = async (req,res)=>{
    try{
        const product = await product.find();
        res.json({message :"Product : ", product})
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
};
/* Get single Product */
exports.getProductById = async(req,res)=>{
    try{
        const product = await product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message : "Product not found"})
        }
        res.json({message:"Product :",product})
    }catch(error){
        res.status(500).json({message:"Internal Server Error"})
    }
};
/*Update Product*/
exports.updateProduct = async(req,res)=>{
    try{
        const product = await product.findByIdAndUpdaate(req.params.id,req.body,{new:true});
        res.json({message:"New Product : ",product})
    }catch(error){
        res.status(500).json({message : "Internal Server Error"})
    }
};
/*Delete Product*/
exports.deleteProduct = async(req,res)=>{
    try{
        const product = await product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({message : "Product not found"});
        }
        res.json({message :"Product Deleted Successfully"});
    }catch(error){
        res.status(500).json({message : "Internal Server Error"})
    }
};
