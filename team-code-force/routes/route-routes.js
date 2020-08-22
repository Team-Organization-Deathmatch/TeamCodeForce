/* eslint-disable arrow-parens */
/* eslint-disable no-console */
const routeRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory, Route, User } = require('../db/index');
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
routeRouter.get('/route/get/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  Route.findAll({
    where: { id: id },
  })
  .then((route) => {
    res.send(route);
  })
  .catch(err => res.status(500).send(err));
});

//post route
routeRouter.post('/route/post', (req, res) => {
  const { park1, lat1, lon1, park2, lat2, lon2, park3, lat3, lon3, park4, lat4, lon4, park5, lat5, lon5, dateStart1, dateEnd1, dateStart2, dateEnd2, dateStart3, dateEnd3, dateStart4, dateEnd4, dateStart5, dateEnd5 } = req.body;
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
  },
  ).then((route) => {
    res.status(201).send({ route });
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

//decline invite route
routeRouter.put('/route/declineInvite', (req, res) => {
  const { id } = req.params;
  User.update({ id_routeInvite: null }, {
    where: {
      id: id,
    },
  })
  .then((data) => {
    // console.log('data', data);
    res.json({ message: 'Declined Invitation to Route' });
  })
  .catch(err => res.status(500).send(err));
});

//double check this. is this id_route correct??????
//accept invite route
routeRouter.put('/route/acceptInvite', (req, res) => {
  const { id, id_route } = req.params;
  User.update({ 
    id_routeInvite: null,
    id_route: id_route,
  }, {
    where: {
      id: id,
    },
  })
  .then((data) => {
    // console.log('data', data);
    res.json({ message: 'Accepted Invitation to Route' });
  })
  .catch(err => res.status(500).send(err));
});

//think this might send full user, not just number
//get user id from phone number
routeRouter.get('/phoneNumber/get/:id', (req, res) => {
  const { id } = req.params;
  User.findAll({
    where: { id: id },
  })
  .then((phoneNumber) => {
    res.send(phoneNumber);
  })
  .catch(err => res.status(500).send(err));
});

module.exports = {
  routeRouter,
};
