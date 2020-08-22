import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <div> MY ROUTES TESTING </div>
      <button
        onClick={() => {
          getMyRoute();
          console.log(document.getElementById('friendNumber').value);
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
      {/* <div class='Routes'>
        {myRoutes.map((route) => {
          <div key={route.id}>
            <br />
            <div>{route.park}</div>
            <br />
            <br />
            <div>{route.startDate}</div>
            <div> {route.endDate} </div>
          </div>;
        })}
      </div> */}
      <div>
        {myRoutes.map((route) => (
          <div>
            <div> {route.park1} </div>
            <div> {route.dateStart1} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoute;
