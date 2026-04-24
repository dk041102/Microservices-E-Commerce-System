const payment = require('../services/paymentService')
const crypto = require('crypto');
const createPayment = async(req,res)=>{
    try{
        const{amount} = req.body;
        const options ={
            amount : amount *100 ,
            currency :"INR",
            receipt : "receipt_" + Date.now()
        };
        const order = await payment.orders.create(options);
        res.json(order);
    }catch(error){
        console.error(error)
        res.status(500).json({message : "Internal Server Error"})
    }
};
const verifyPayment = async(req,res)=>{
    try{
        const{razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac("sha256",process.env.Razorpay_secret).update(body).digest("hex");
        if(expectedSignature === razorpay_signature){
            res.json({message: "Payment Verified Successfully"});
        }else{
            res.status(400).json({message : "Payment verification failed"})
        }
    }catch(error){
        console.error(error)
        res.status(500).json({message : "Internal Server Error"})
    }
};
module.exports = {
    createPayment,verifyPayment
}
