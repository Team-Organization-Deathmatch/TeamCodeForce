/* eslint-disable arrow-parens */
/* eslint-disable no-console */
const parkRouter = require('express').Router();
const { Park, UserParkWishList, UserParkHistory } = require('../db/index');

parkRouter.post('/wishlist', (req, res) => {
  const { name, userID, url } = req.body;
  Park.findOrCreate({
    where: { name },
    defaults: {
      name,
    },
  })
    .then((park) => {
      UserParkWishList.findOrCreate({
        where: { id_park: park[0].id },
        defaults: {
          id_user: userID,
          id_park: park[0].id,
          name: park[0].name,
          url,
        },
      });
    })
    .then((entry) => {
      res.status(201).send({ entry });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

parkRouter.get('/wishlist/get/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  console.log('HELLOOOOOOOOOOO');
  UserParkWishList.findAll({
    where: { id_user: id },
  })
    .then((parkName) => {
      res.send(parkName);
    })
    .catch((err) => res.status(500).send(err));
});

parkRouter.delete('/wishlist/delete/:id/:name', (req, res) => {
  const { id, name } = req.params;
  UserParkWishList.destroy({
    where: {
      id_user: id,
      name,
    },
  })
    .then((data) => {
      console.log('data', data);
      res.json({ message: 'successfully deleted entry' });
    })
    .catch((err) => res.status(500).send(err));
});

parkRouter.post('/history', (req, res) => {
  const { name, userID, url } = req.body;
  Park.findOrCreate({
    where: { name },
    defaults: {
      name,
    },
  })
    .then((park) => {
      console.log(url);
      UserParkHistory.findOrCreate({
        where: { id_park: park[0].id },
        defaults: {
          id_user: userID,
          id_park: park[0].id,
          name: park[0].name,
          url,
        },
      });
    })
    .then((test) => {
      console.log(test);
      res.status(201).send({ message: 'Added to Database' });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

parkRouter.get('/history/get/:id', (req, res) => {
  const { id } = req.params;
  UserParkHistory.findAll({
    where: { id_user: id },
  })
    .then((parkName) => {
      res.send(parkName);
    })
    .catch((err) => res.status(500).send(err));
});

parkRouter.delete('/history/delete/:id/:name', (req, res) => {
  const { id, name } = req.params;
  UserParkHistory.destroy({
    where: {
      id_user: id,
      name,
    },
  })
    .then((data) => {
      console.log('data', data);
      res.json({ message: 'successfully deleted entry' });
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = {
  parkRouter,
};
