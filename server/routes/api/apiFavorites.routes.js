const router = require('express').Router();
const { Like, Product, PhotoProduct } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { userId: res.locals.user.id },
      include: { model: Product, include: { model: PhotoProduct } },
    });
    // console.log(likes, '???????');
    res.json(likes);
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
    const like = await Like.findOne({
      where: { id: addLike.id },
      include: { model: Product, include: { model: PhotoProduct } },
    });
    res.json(like);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Like.findOne({ where: { productId: id } });
    // console.log(product, '+++++++++');
    if (product) {
      const del = await Like.destroy({ where: { productId: id } });
      // console.log(del, '?????///');
      if (del > 0) {
        res.json(product);
      } else {
        res.status(400).json({ message: 'Cannot be deleted from favorites' });
      }
    } else {
      res.status(400).json({ message: 'Cannot be deleted ' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});
module.exports = router;
