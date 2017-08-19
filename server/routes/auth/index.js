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
      password: hash
    };
    return new User(user).save()
  })
  .then(({ attributes }) => {
    req.logIn(dataValues, (error) => {
      if (error) return res.status(500).json({ error });
      res.status(200).json({
        email: attributes.email,
      });
    });
  })
  .catch(( error ) => {
    res.status(400).json({ error });
  });
});

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) return res.status(500).json({ err });

    if (!user) return res.status(401).json({ message: 'invalid' });

    req.logIn(user, (error) => {
      if (error) return res.json({ error });
      return res.status(200).json({ email: user.email });
    });
  })(req, res);
});

router.delete('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ success: true });
});

module.exports = router;