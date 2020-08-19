require('dotenv').config();
const axios = require('axios');

const getWeatherData = (cityName) => {
    axios({
        "method":"GET",
        "url":"https://community-open-weather-map.p.rapidapi.com/forecast",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key":process.env.WEATHER_API,
        "useQueryString":true
        },"params":{
        "q":cityName,
        "cnt":"1",
        }
        })
        .then(({ data })=>{
          return data;
        })
        .catch((error)=>{
          console.log(error)
        })
};

module.exports = {
    getWeatherData,
};