const express = require('express');
const next = require('next');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const dev = process.env.NODE_ENV !== 'production';

const db = require('./server/models');
const routes = require('./server/routes');
const { SESSION_SECRET } = require('./server/config/session.json');

const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./server/models');
const { checkPassword } = require('./server/utils/hash.js');

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    }));

    server.use(passport.initialize());
    server.use(passport.session());

    server.use('/api', routes);

    require('./server/passport')(); // passport strategy and serialization;

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      db.sequelize.sync();
      console.log('Listening on http://localhost:3000');
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

