const router = require("express").Router();
const { Cart, CartItem, Product } = require("../../db/models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const carts = await Cart.findAll({
      where: {
        userId: res.locals.user.id,
        status: {
          [Op.or]: ["ordererd", "delivered"],
        },
      },
      include: [
        {
          model: CartItem,
          include: [Product],
        },
      ],
    });
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
