const router = require('express').Router();
// const nodemailer = require('nodemailer');
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
        tel,
      });
      if (remont) {
        res.status(200).json({ message: 'ok' });
      } else {
        res.status(400).json({ message: 'erorrrrrrr' });
      }
    }
    res.status(400).json({ message: 'заполните все поля' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
