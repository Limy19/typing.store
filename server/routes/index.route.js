const router = require('express').Router();

const authRouter = require('./api/auth.routes');
const productRouter = require('./api/apiProduct.routes');
const categoryRouter = require('./api/apiCategory.routes');
const cartRouter = require('./api/cart.routes');
const lk = require('./api/lk.routes');
const repair = require('./api/apiRepair.routes');
const favorites = require('./api/apiFavorites.routes');

router.use('/api/auth', authRouter);
router.use('/api/category', categoryRouter);
router.use('/api/cart', cartRouter);
router.use('/api/product', productRouter);
router.use('/api/Lk', lk);
router.use('/api/repair', repair);
router.use('/api/favorites', favorites);

module.exports = router;
