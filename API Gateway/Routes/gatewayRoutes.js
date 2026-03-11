const express = require("express")
const services = require("./config/services")
const {createproxyMiddleware} = require("http-proxy-middleware")
const {verifytoken} = require("./Middleware/authMiddleware")

const Router = express.Router()

/*Auth service */
Router.use("/auth",createproxyMiddleware({
    target: services.auth,
    changeOrigin :true
})
);
/* Product Service */
Router.use("/product",createproxyMiddleware({
    target:services.product,
    changeOrigin: true
})
);
/* Order Service */
Router.use("/order",verifytoken,createproxyMiddleware({
    target: services.order,
    changeOrigin: true
})
)
/* Payment Service */
Router.use("/Payment",verifytoken,createproxyMiddleware({
    target:services.payment,
    changeOrigin : true
})
)
module.exports = Router;