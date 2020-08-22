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
    //are they traveling?
   return Route.findOne({ where: {
      id_route: routeId
    }}).then((route) => {
      console.log(route)
      return route;
    })
    //if so where?
  }
module.exports = {
  routeUsersPhone,
  findRouteWeather,

}