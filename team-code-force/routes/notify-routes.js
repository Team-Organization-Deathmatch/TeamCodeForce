const notifyRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory, User } = require('../db/index');
require('dotenv').config();
const { routeUsersPhone } = require('../db/database')
// const accountSid = process.env.TWILIO_SID;
// const authToken = process.env.TWILIO_TOKEN;

// const client = require('twilio')(accountSid, authToken);

notifyRouter.get('/routechange', (req, res) => {
  console.log('hit the route /test!');
  routeUsersPhone(null).then((data) => {
    console.log(data, 'THIS IS YOUR DATA!');
    res.status(200);
    res.send(data);
  })
})

module.exports = {
  notifyRouter,
}