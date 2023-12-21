const router = require('express').Router();
const { Cart, CartItem, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    if (res.locals.user) {
      const cart = await Cart.findOne({
        where: { userId: res.locals.user.id, status: 'new' },
        include: [
          {
            model: CartItem,
            include: [Product],
          },
        ],
      });

      res.json(cart?.CartItems || []);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/add', async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findOne({ where: { id: productId } });
  if (product.stock === 0) {
    return res.json({ message: 'Товар закончился' });
  }
  const [cart, createdCart] = await Cart.findOrCreate({
    where: { userId: res.locals.user.id, status: 'new' },
    defaults: { userId: res.locals.user.id, status: 'new' },
  });

  const cartId = cart?.id || createdCart?.id;
  const [cartItem, created] = await CartItem.findOrCreate({
    where: { productId, cartId },
    defaults: { productId, cartId, count: 1 },
    include: [Product],
  });
  if (!created) {
    if (product.stock > cartItem.count) {
      cartItem.count++;
      await cartItem.save();
    } else {
      return res.json({ message: 'Нельзя добавить больше' });
    }
  }
  res.status(200).json({ cartItem, message: 'success' });
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cartItem = await CartItem.destroy({ where: { id } });
    res.json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/order', async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: {
        userId: res.locals.user.id,
        status: 'new',
      },
      include: [CartItem],
    });
    await Promise.all(
      cart.CartItems.map(async (item) => {
        const product = await Product.findByPk(item.productId);
        console.log(cart.CartItems);
        product.stock -= item.count;
        await product.save();
      })
    );
    cart.status = 'ordererd';
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
