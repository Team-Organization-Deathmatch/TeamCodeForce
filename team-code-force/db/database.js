const { Park, UserParkWishList, UserParkHistory, User, Route } = require('../db/index');
const { getWeatherData } = require('../weather/weather');
  // id_route is a key on user that references the route they are part of
  
  const routeUsersPhone = (routeId) => {
    return User.findAll({ where : {
      id_route: routeId
    }}).then(data => {
      let userPhoneNumbers = [];
      data.forEach(user => {
        userPhoneNumbers.push(user.dataValues.phoneNumber)
      })
      return userPhoneNumbers;
    })
  }
  const findRouteWeather = (routeId, date) => {
    let dateNums = [1, 2, 3, 4, 5];
    let dates = [];
    let flag = [false, 0];
    let lat;
    let lon;
    return Route.findOne({ where: {
      id: routeId
    }})
    .then((route) => {
      let routeInfo = route.dataValues;
      dateNums.forEach(num => {
        dates.push([route.dataValues[`dateStart${num}`], route.dataValues[`dateEnd${num}`]]);
      })
      dates.forEach((tuple, index) => {
        if(tuple.includes(date)){
          flag[0] = true;
          flag[1] = index + 1;
        }
      })
      if(flag[0] === true){
        lat = route.dataValues[`lat${flag[1]}`]
        lon = route.dataValues[`lon${flag[1]}`]
      }
      // all we have to do here is get lat/lon and convert the temperature from kelvins
      // then send a text message to the user about their weather for the day
      return getWeatherData('55.7558', '37.6173')
      .then((data) => {
        console.log(data.weather[0].description, data.main.temp, data.main.feels_like, 'YOLO FOR LIFE');
        let description = data.weather[0].main;
        let temp = Math.trunc((data.main.temp * 1.8) - 457);
        let feels = Math.trunc((data.main.feels_like * 1.8) - 457);
        let humidity = data.main.humidity;
        //console.log(temp, feels)
        return [temp, feels, humidity, description];
      })
    })

  }


module.exports = {
  routeUsersPhone,
  findRouteWeather,
}