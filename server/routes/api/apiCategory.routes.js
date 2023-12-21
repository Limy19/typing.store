const router = require('express').Router();
const { Category, Product, PhotoProduct } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let products;
    if (id) {
      products = await Product.findAll({
        where: { categoryId: id },
        include: { model: PhotoProduct },
      });
    } else {
      products = await Product.findAll({
        include: { model: PhotoProduct },
      });
    }

    res.status(200).json(products);
  } catch ({ message }) {
    console.log(message, '>>>>');
    res.status(500).json({ message });
  }
});
module.exports = router;
