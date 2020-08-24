import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const MyRoute = ({ user }) => {
  const sendNumberAndUser = (friendNumber) => {
    console.log(friendNumber, user, 'TESTING 1 2 3 ');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, friendNumber }),
    };
    fetch('/route/sendInvite', requestOptions)
      .then((response) => response.json())
      .then((responeJson) => console.log(responeJson));
  };

  const getMyRoute = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    console.log(`${user.id}`, 'USER');
    const response = await fetch(`/route/get/${user.id}`, requestOptions);
    response
      .json()
      .then((data) => {
        console.log(data, 'HERE iS THE DATA');
        return response;
      })
      .catch((err) => console.log(err));
    // return response;
    // .then((response) => console.log(response))
    // .then((responseJson) => console.log(responseJson))
    // .catch((err) => console.log(err));
    return response;
  };

  const [myRoutes, myRoutesUpdate] = useState([{ park1: 5 }]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`/route/get/${user.id}`, requestOptions)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        myRoutesUpdate(response);
      });
  }, []);
  // useEffect(() => {
  //   getMyRoute().then((data) => {
  //     console.log(data, 'THIS IS A TEST');
  //     myRoutesUpdate([{ dateEnd1: 7 }]);
  //   });
  // }, []);
  // myRoutesUpdate([{ id: 5 }]);
  // useEffect(() => getMyRoute());
  const sendInvite = (number) => {
    // const data = JSON.stringify({ 'testing 1 2 3' });
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phoneNumber: number, user }),
    };
    fetch('/route/sendInvite', requestOptions)
      .then((response) => console.log(response))
      Axios.post('/notify/invite', {number: number}).then(() => {
        console.log(`invite sent to ${number}`)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div> MY ROUTES TESTING </div>
      <button
        onClick={() => {
          // getMyRoute();
          sendInvite(document.getElementById('friendNumber').value);
          // console.log(document.getElementById('friendNumber').value);
          console.log(
            'testing, this button will send a phone number to database'
          );
        }}
      >
        {' '}
        Invite A Friend{' '}
      </button>
      <input
        id='friendNumber'
        type='text'
        placeholder='Enter a friends phone #'
      />
      <div>
        <h1> Route Planner Table </h1>
        {myRoutes.map((route) => (
          <div>
            <h2> First Park </h2>
            <div> Date Start: {route.dateStart1 || null} </div>
            <div> Date End: {route.dateEnd1} </div>
            <div> Park: {route.park1} </div>
            <h2> Second Park </h2>
            <div> Date Start: {route.dateStart2} </div>
            <div> Date End: {route.dateEnd2} </div>
            <div> Park: {route.park2} </div>
            <h2> Third Park </h2>
            <div> Date Start: {route.dateStart3} </div>
            <div> Date End: {route.dateEnd3} </div>
            <div> Park: {route.park3} </div>
            <h2> Fourth Park </h2>
            <div> Date Start: {route.dateStart4} </div>
            <div> Date End: {route.dateEnd4} </div>
            <div> Park: {route.park4} </div>
            <h2> Fifth Park </h2>
            <div> Date Start: {route.dateStart5} </div>
            <div> Date End: {route.dateEnd5} </div>
            <div> Park: {route.park5} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoute;
