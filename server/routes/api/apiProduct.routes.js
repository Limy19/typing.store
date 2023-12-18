const router = require('express').Router();
const { Product, PhotoProduct } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    console.log('lknjbuoiuh777777777887y87y887y8787y87y87y87');
    const product = await Product.findOne({
      where: { id: req.params.id },
      include: { model: PhotoProduct },
    });
    const foto = await PhotoProduct.findAll();
    console.log(product, '???////');
    res.status(200).json(product);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

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

router.post('/', async (req, res) => {
  try {
    const { categoryId, description, name, price, stock } = req.body;

    if (description && name && price && stock && categoryId) {
      const product = await Product.create({
        name,
        description,
        price,
        stock,
        categoryId,
      });

      const newProduct = await Product.findOne({
        where: { id: product.id },
      });

      res.status(201).json(newProduct);
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message });
  }
});
module.exports = router;
