/* eslint-disable arrow-parens */
/* eslint-disable no-console */
const routeRouter = require('express').Router();
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

routeRouter.post('/put', (req, res) => {
  res.send('hello');
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
  const { id } = req.params;
  console.log('USER PUT');
  User.update(
    { id_routeInvite: null },
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

module.exports = {
  routeRouter,
};
