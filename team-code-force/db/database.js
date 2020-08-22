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
    }}).then((route) => {
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
      
      getWeatherData('55.7558', '37.6173').then((data) => {
        console.log(data, 'YOLO FOR LIFE');
      })
    })

  }

  const userRouteInvite = () => {

  }


module.exports = {
  routeUsersPhone,
  findRouteWeather,
  userRouteInvite,
}