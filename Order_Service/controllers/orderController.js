const Order = require("../models/orderModels")
createOrder = async(req,res)=>{
    try{
        const order = await Order.create({
            userId : req.user.id,
            products : req.body.products,
            totalprice : req.body.tottalprice
        });
        res.status(201).json(order);
    }catch(error){
        res.status(500).json({message : error.message})
    }
};
getUserOrder = async(req,res)=>{
    try{
        const order = await Order.find({userId : req.params.userId});
        res.status(200).json(order)
    }catch(error){
        res.status(500).json({message : error.message})
    }
};

getOrdersbyId = async(req,res)=>{
    try{
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    }catch(error){
        res.status(500).json({message : error.message})

    }
};

updateOrder = async(req,res)=>{
    try{
        const order = await Order.findByIdAndUpdate(req.params.id,req.body,{new : true});
        if(!order){
            return res.status(404).json({message : "Order not found"})
        }
        res.json({message : "Order updated"})
    }catch(error){
        res.status(500).json({message : error.message})
    }
};
module.exports = {createOrder,getUserOrder,getOrdersbyId,updateOrder};
