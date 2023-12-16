const router = require("express").Router();

const authRouter = require("./api/auth.routes");

const categoryRouter = require("./api/apiCategory.routes");
const cartRouter = require("./api/cart.routes");

router.use("/api/auth", authRouter);
router.use("/api/category", categoryRouter);
router.use("/api/cart", cartRouter);

module.exports = router;
