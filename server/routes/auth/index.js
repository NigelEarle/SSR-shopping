const express = require('express');
const passport = require('passport');
const { User } = require('../../models');
const { hashPassword } = require('../../utils/hash.js');

const router = express.Router();

router.post('/register', (req, res) => {
  const {
    email,
    password,
  } = req.body;

  hashPassword(password)
  .then((hash) => {
    const user = {
      email,
      password: hash,
    };

    return User.create(user);
  })
  .then(({ dataValues }) => {
    req.logIn(dataValues, (error) => {
      if (error) return res.status(500).json({ error });
      res.status(200).json({
        email: dataValues.email,
      });
    });
  })
  .catch(( error ) => {
    res.status(400).json({ error });
  });
});

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    console.log('USER', user)
    if (err) return res.status(500).json({ err });

    if (!user) return res.status(401).json({ message: 'invalid' });

    req.logIn(user, (error) => {
      if (err) return res.json({ error });

      return res.status(200).json({ email: user.email });
    });
  })(req, res);
});

router.delete('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ success: true });
});

module.exports = router;