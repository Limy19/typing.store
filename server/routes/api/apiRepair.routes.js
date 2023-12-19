const router = require('express').Router();
const { Remont } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { name, email, description, tel } = req.body;

    if (name && email && description && tel) {
      const remont = await Remont.create({
        userId: res.locals.user.id,
        name,
        email,
        description,
        phone: tel, // Замените `phone` на `tel`
      });

      if (remont) {
        res.status(200).json({ message: 'ok', remont });
      } else {
        res.status(400).json({ message: 'error' });
      }
    } else {
      res.status(400).json({ message: 'заполните все поля' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
