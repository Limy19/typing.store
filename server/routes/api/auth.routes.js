const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { generateTokens } = require('../../utils/authUtils');
const cookiesConfig = require('../../config/cookiesConfig');
const jwtConfig = require('../../config/jwtConfig');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      let user = await User.findOne({ where: { email } });
      if (user) {
        res.status(400).json({ message: 'Такая почта уже зарегистрированна' });
      } else {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({
          name,
          email,
          password: hash,
          isAdmin: false,
        });

        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
          },
        });

        res
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .status(201)
          .json({
            name,
            isAdmin: user.isAdmin,
            id: user.id,
            email,
          });
      }
    } else {
      res.status(400).json({ message: 'заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/authentication', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const { accessToken, refreshToken } = generateTokens({
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
          },
        });

        res
          .cookie(cookiesConfig.access, accessToken, {
            maxAge: cookiesConfig.maxAgeAccess,
            httpOnly: true,
          })
          .cookie(cookiesConfig.refresh, refreshToken, {
            maxAge: cookiesConfig.maxAgeRefresh,
            httpOnly: true,
          })
          .status(200)
          .json({ user, message: 'ok' });
      } else {
        res
          .status(400)
          .json({ message: 'Ваша почта или пароль не соответствуют' });
      }
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err.message);
  }
});
router.get('/logout', (req, res) => {
  try {
    res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/check', (req, res) => {
  try {
    if (res.locals.user) {
      res.json({ message: 'success', user: res.locals.user });
    } else {
      res.status(401).json({ message: 'Пользователь не аутентифицирован' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
