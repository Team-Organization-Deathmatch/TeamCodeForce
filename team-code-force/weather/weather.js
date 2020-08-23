require('dotenv').config();
const axios = require('axios');

const getWeatherData = (lat, lon) => {
    return axios({
        "method":"GET",
        "url":"https://community-open-weather-map.p.rapidapi.com/weather",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key":process.env.WEATHER_API,
        "useQueryString":true
        },"params":{
        "lat":lat,
        "lon":lon
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