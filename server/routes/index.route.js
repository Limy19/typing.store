const router = require("express").Router();


const authRouter = require("./api/auth.routes");
const productRouter = require('./api/apiProduct.routes');
const categoryRouter = require("./api/apiCategory.routes");
const cartRouter = require("./api/cart.routes");

router.use("/api/auth", authRouter);
router.use("/api/category", categoryRouter);
router.use("/api/cart", cartRouter);
router.use('/api/product', productRouter);


module.exports = router;
