const notifyRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory, User } = require('../db/index');
require('dotenv').config();
const { routeUsersPhone } = require('../db/database')
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const { sendNotification } = require('../sms/twilio')
const client = require('twilio')(accountSid, authToken);

notifyRouter.get('/routechange', (req, res) => {
  routeUsersPhone(null).then((data) => {

    sendNotification('yolo', '+19086123718');
      console.log('sent');
      res.status(200);
      res.send(data);
    
  })
})

module.exports = {
  notifyRouter,
}