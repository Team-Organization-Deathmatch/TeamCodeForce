/* eslint-disable no-console */
const express = require('express');
const dotenv = require('dotenv');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
require('./passport/GoogleStrategy');
const { authRouter } = require('./routes/auth-routes');
const { parkRouter } = require('./routes/park-routes');
const { notifyRouter } = require('./routes/notify-routes');
const { routeRouter } = require('./routes/route-routes');
const bodyParser = require('body-parser');
// const { session } = require('./.config.js');
// ADD IN REQUIRE DOT ENV
require('dotenv').config();
require('./db/models/Park');
require('./db/index.js');

dotenv.config();
const app = express();

// this is just a test to see if my git will show commits

const { SERVER_PORT } = process.env || 8080;

app.set('trust proxy', 1);
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, HEAD, PUT, PATCH, DELETE',
    credentials: true,
  })
);

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// set up cookie
app.use(
  cookieSession({
    // maxAge: 24 * 60 * 60 * 1000,
    keys: ['hello', 'test'],
    name: 'login-session',
  })
);

app.use(cookieParser());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use('/auth', authRouter);
app.use('/park', parkRouter);
app.use('/notify', notifyRouter);
app.use('/route', routeRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on ${SERVER_PORT}`);
});
