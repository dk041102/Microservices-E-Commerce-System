const express = require("express")
const {
    createPayment,
    verifyPayment
} = require("./controllers/paymentController");
const router = express.Router();

/*Routes*/
router.post("/create",createPayment);
router.post("/verify",verifyPayment);

module.exports = router;
