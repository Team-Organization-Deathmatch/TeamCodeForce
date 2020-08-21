const { Park, UserParkWishList, UserParkHistory, User, Route } = require('../db/index');
  // id_route is a key on user that references the route they are part of
  const routeUsers = (routeId) => {
    return User.findAll({ where : {
      id_route: routeId
    }})
  }
  const findUserByPhoneNumber = () => {
    
  }
module.exports = {
  routeUsers,
}