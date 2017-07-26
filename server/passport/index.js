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

  passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({
      where: {
        username,
      },
    })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }
      checkPassword(password, user.password)
      .then((isValid) => {
        if (isValid) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
    .catch((err) => {
      done(err);
    });
  }));
};
