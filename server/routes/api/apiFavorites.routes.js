const router = require('express').Router();
const { User, Product, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const likes = await Like.findAll({
      where: { userId: res.locals.user.id },
    });
    console.log(likes, '++++++');
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
    res.json(addLike);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Like.findOne({ where: { productId: id } });
    if (product) {
      const del = await Like.destroy({ where: { productId: id } });
      if (del > 0) {
        res.json({ message: 'ok', product });
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
