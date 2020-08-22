const { Park, UserParkWishList, UserParkHistory, User, Route } = require('../db/index');
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
  const findUserByPhoneNumber = () => {
    
  }
module.exports = {
  routeUsersPhone,
}