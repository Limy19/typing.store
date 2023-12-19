const router = require('express').Router();
const { User, Product, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const likes = await Like.findAll({
      row: true,
      include: { model: Product, where: {} },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { id } = req.body;
  try {
    const addLike = await Like.create({
      userId: res.locals.user.id,
      productId: id,
    });
    await Like.findAll({ where: { userId: res.locals.user.id } });

    if (addLike) {
      const products = await Like.findAll({
        row: true,
        include: { model: Product, where: { id: addLike.productId } },
      });
      //   console.log(product[0].Product, '!!!!!');
      res.json({ products });
    } else {
      res.status(400).json({ message: 'Cannot be saved to favorites' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
