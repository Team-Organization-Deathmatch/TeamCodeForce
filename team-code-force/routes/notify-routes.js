const notifyRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory, User } = require('../db/index');
require('dotenv').config();
const { routeUsersPhone, findRouteWeather, userRouteInvite } = require('../db/database')
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const { sendNotification } = require('../sms/twilio')
const client = require('twilio')(accountSid, authToken);
const { getWeatherData } = require('../weather/weather');

notifyRouter.get('/routechange', (req, res) => {
  //need to pass in a route's id to identify the user objects that have it, not null
  routeUsersPhone(null).then((data) => {
    //update with a for each
    data.forEach(number => {
      sendNotification(`your route has been updated`, '+12163859616');
        console.log('sent');

    })
      res.status(200);
      res.send(data);
  })
})

notifyRouter.post('/dailyweather', (req, res) => {
  let date = new Date()
  let dateString;
   dateString = date.toString();
   dateString = dateString.slice(4, 15);
   /// Aug 22 2020
  
  console.log(dateString);
  // findRouteWeather(req.user.dataValues.id_route, '2020-08-22')
  // .then(data => {
  //   console.log(data, 'in notify routes');
  //   sendNotification(`The weather at your current location is ${data[3]}, with a temperature of ${data[0]}. It feels like ${data[1]} and the humidity is ${data[2]}`, '+12163859616');
  //   res.send(data)
  // })
  //send the weather data?
})

notifyRouter.post('/invite', (req, res) => {
  console.log(req.body);
  sendNotification(`you have been invited to join a route!`, '+12163859616');
})

module.exports = {
  notifyRouter,
}