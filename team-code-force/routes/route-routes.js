/* eslint-disable arrow-parens */
/* eslint-disable no-console */
const routeRouter = require('express').Router();
// const { Park, UserParkWishList, UserParkHistory, User } = require('../db/index');
// require('dotenv').config();
// const { routeUsersPhone, findRouteWeather } = require('../db/database')

const {
  Park,
  // UserParkWishList,
  // UserParkHistory,
  Route,
  User,
} = require('../db/index');
//above is adjusted
//Routes I'll need:
//edit route
//user id
//lat & long
//park name
// /route/put
//phone number route
//grab names of who else has same route
//finish routes on front end
//send route invite
// /route/sendInvite

//google api

//get route
routeRouter.get('/get/:id', (req, res) => {
  //console.log('TESTING 1 2 3');
  const { id } = req.params;
  //console.log(id, 'THIS IS THE ID');
  // console.log(req.params);

  User.findAll({
    where: { id: id },
  }).then((user) => {
    //console.log(user);
    console.log(
      user[0].dataValues.id_route,
      'THIS IS THE USER ID ROUTE NUMBER'
    );
    Route.findAll({
      where: { id: user[0].dataValues.id_route },
    })
      .then((data) => {
        res.send(data);
        //console.log(data);
      })
      .catch((err) => res.status(500).send(err));
  });
});

routeRouter.post('/addToRoute', (req, res) => {
  console.log(req.body.userID, 'userID')
  console.log(req.body)
  // find user with userid
  // if has route
  // get routeid stored on user
  // update;['''''''''''']

  //if the route id is null, create route
  // then update user with the route id
  User.findAll({
    where: {
      id: req.body.userID
    }
  })
    .then((user) => {
      // console.log(user, 'user')
      // console.log(user[0].dataValues.id_route, 'id route');
      if (user[0].dataValues.id_route !== null) {
        Route.findOne({
          where: {
            id: user[0].dataValues.id_route
          }
        })
          .then((route) => {

            if (route.park2 === null) {
              Route.update(
                {
                  park2: req.body.name,
                  lat2: req.body.lat,
                  lon2: req.body.lng,
                },
                {
                  where: {
                    id: route.id,
                  },
                }
              )
            }
            else if (route.park3 === null) {
              Route.update(
                {
                  park3: req.body.name,
                  lat3: req.body.lat,
                  lon3: req.body.lng,
                },
                {
                  where: {
                    id: route.id,
                  },
                }
              )
            }
            else if (route.park4 === null) {
              Route.update(
                {
                  park4: req.body.name,
                  lat4: req.body.lat,
                  lon4: req.body.lng,
                },
                {
                  where: {
                    id: route.id,
                  },
                }
              )
            }
            else if (route.park5 === null) {
              Route.update(
                {
                  park5: req.body.name,
                  lat5: req.body.lat,
                  lon5: req.body.lng,
                },
                {
                  where: {
                    id: route.id,
                  },
                }
              )
            }


          })
      } else {
        Route.create({
          park1: req.body.name,
          lat1: req.body.lat,
          lon1: req.body.lng,

        })
        .then((route) => {
          console.log(req.body.userID, 'line 147');
          User.update({ id_route: route.id }, { where: {
            id: req.body.userID
          }})
        })
      }

    })

});

//post route
routeRouter.post('/post', (req, res) => {
  const {
    park1,
    lat1,
    lon1,
    park2,
    lat2,
    lon2,
    park3,
    lat3,
    lon3,
    park4,
    lat4,
    lon4,
    park5,
    lat5,
    lon5,
    dateStart1,
    dateEnd1,
    dateStart2,
    dateEnd2,
    dateStart3,
    dateEnd3,
    dateStart4,
    dateEnd4,
    dateStart5,
    dateEnd5,
  } = req.body;
  Route.create({
    park1: park1,
    lat1: lat1,
    lon1: lon1,
    park2: park2,
    lat2: lat2,
    lon2: lon2,
    park3: park3,
    lat3: lat3,
    lon3: lon3,
    park4: park4,
    lat4: lat4,
    lon4: lon4,
    park5: park5,
    lat5: lat5,
    lon5: lon5,
    dateStart1: dateStart1,
    dateStart2: dateStart2,
    dateStart3: dateStart3,
    dateStart4: dateStart4,
    dateStart5: dateStart5,
    dateEnd1: dateEnd1,
    dateEnd2: dateEnd2,
    dateEnd3: dateEnd3,
    dateEnd4: dateEnd4,
    dateEnd5: dateEnd5,
  })
    .then((route) => {
      res.status(201).send({ route });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

//decline invite route
routeRouter.post('/declineInvite', (req, res) => {
  // console.log('TESTING 1 2 3');
  // console.log(req.body);
  const { id } = req.body.user;
  // console.log('USER PUT 2 WTF');
  User.update(
    {
      id_routeInvite: null,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((data) => {
      // console.log('data', data);
      res.json({ message: 'Declined Invitation to Route' });
    })
    .catch((err) => res.status(500).send(err));
});

//double check this. is this id_route correct??????
//accept invite route
routeRouter.post('/acceptInvite', (req, res) => {
  console.log('TESTING 1 2 3');
  console.log(req.body);
  const { id, id_route } = req.body.user;
  console.log('USER PUT 2 WTF');
  User.update(
    {
      id_routeInvite: null,
      id_route: id_route,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((data) => {
      // console.log('data', data);
      res.json({ message: 'Accepted Invitation to Route' });
    })
    .catch((err) => res.status(500).send(err));
});

//think this might send full user, not just number
//get user id from phone number
routeRouter.post('/sendInvite', (req, res) => {
  //res.statusCode(201);
  // console.log(req.body.phoneNumber);
  // console.log(req.user.id);
  User.update(
    {
      id_routeInvite: req.user.id_route,
    },
    {
      where: { phoneNumber: req.body.phoneNumber },
    }
  ).then(res.send());
  // res.send('THIS IS A TEST');
  // console.log('USER GET 3 WHY WOnt u CONSOLE LOG');
  // const { id } = req.params;
  // User.findAll({
  //   where: { id: id },
  // })
  //   .then((phoneNumber) => {
  //     res.send(phoneNumber);
  //   })
  //   .catch((err) => res.status(500).send(err));
});

// routeRouter.get('/checkInvite/:id', (req, res) => {
//   console.log('req.body', req.body)
//   const { id } = req.params;
//   User.findOne(
//     {
//       where: { id:id },
//     }
//   )
// .then((user)=>{
//   Route.findOne(
//     {
//       where: {id: user.id_routeInvite}
//     }
    
//   )  
//   .then((route)=> {
//     console.log('route', route)
//     res.send( { 'hello' })})
//     .catch((err)=> {console.log('err', err)})
//   })
//   })

module.exports = {
  routeRouter,
};
