const router = require('express').Router();
// const nodemailer = require('nodemailer');
const { Remont } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { name, email, description, tel } = req.body;
    if (name && email && description && tel) {
        await Remont
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
module.exports = router;
