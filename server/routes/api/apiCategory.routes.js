const router = require('express').Router();
const { Category, Product } = require('../../db/models');

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
    const products = await Product.findAll({ where: { categoryId: id } });
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
