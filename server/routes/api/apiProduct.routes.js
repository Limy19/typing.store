const router = require('express').Router();
const { Product } = require('../../db/models');

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
    });
    if (product) {
      const respons = await Product.destroy({
        where: { id },
      });
      if (respons) {
        res.status(200).json({ id: product.id });
      } else {
        res.status(400).json({ message: 'Произошла ошибка при удалении' });
      }
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, stock, price } = req.body;
    if (description && name && stock && price) {
      const product = await Product.findOne({
        where: { id },
      });
      if (product) {
        product.description = description;
        product.name = name;
        product.price = price;
        product.stock = stock;
        await product.save();
        res.status(200).json(product);
      } else {
        res.status(400).json({ message: 'Это не Ваше' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
