const router = require('express').Router();

const authRouter = require('./api/auth.routes');

const categoryRouter = require('./api/apiCategory.routes');

router.use('/api/auth', authRouter);
router.use('/api/category', categoryRouter);

module.exports = router;
