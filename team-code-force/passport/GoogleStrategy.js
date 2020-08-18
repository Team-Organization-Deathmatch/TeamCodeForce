/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const { google } = require('../.config.js');
const { User } = require('../db');

passport.serializeUser((user, done) => {
  done(null, user[0].dataValues.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: 'http://localhost:8080/google/callback',
  },
  (accessToken, refreshToken, profile, email, done) => {
    User.findOrCreate({
      where: { googleId: email.id },
      defaults: {
        name: email.displayName,
        googleId: email.id,
        email: email._json.email,
        image: email._json.picture,
      },
    }).then((user) => {
      done(null, user);
    }).catch((err) => {
      console.log(err);
    });
  }),
);
