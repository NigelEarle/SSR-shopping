const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');
const { checkPassword } = require('../utils/hash.js');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, false);
    });
  });

  passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },(email, password, done) => {
    User.findOne({
      where: {
        email,
      },
    })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      checkPassword(password, user.password) // pass .then block down chain
      .then((isValid) => {
        if (isValid) {
          return done(null, user);
        }
        return done(null, false);
      })
    })
    .catch((err) => {
      return done(err);
    });
  }));
};
