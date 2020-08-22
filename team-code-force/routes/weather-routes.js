const weatherRouter = require('express').Router();
const { getWeatherData } = require('../weather/weather');
const { sendNotification } = require('../sms/twilio');
// | require method to obtain user data!
const db = require('../db/index/User');

// |variables that are globalized and data
//  \never changes unless POST request is invoked.
const phoneNum = '';
let city = '';

weatherRouter.get('/api/weather', (req, res) => {
  getWeatherData(city)
    .then((data) => {
      if (data[0].winds.speed > 5) {
        sendNotification('WARNING! CRITICAL! Strong winds seem to be in your area, maybe it is best to reschedule?', phoneNum);
      }
      if (data[0].weather[0].description === 'thunder storm') {
        sendNotification('CRITICAL WARNING! There seems to be a potential thunderstorm in your area. You may want to reschedule.', phoneNum);
      }
      if (data[0].weather[0].description === 'cloudy sky') {
        sendNotification('Alert! Cloudy skies could mean future thunderstorm. Maybe its not in best interest to schedule now. reschedule?', phoneNum);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

weatherRouter.post('/api/weather', (req, res) => {
  /* method to obtain user information for phone number */
  city = req.body.city;
});
