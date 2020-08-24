import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const { REACT_APP_SERVER_PORT } = process.env;
//Seb & Christopher's
const Invites = ({ user }) => {
  // let [users, setUsers] = useState();

  // useEffect(() => {
    // axios
    //   .get(`http://localhost:${REACT_APP_SERVER_PORT}/notify/routechange`)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
  // }, []);
  //end seb & c's
// =======


//seb and c's add's
  const acceptInvite = () => {
    console.log(user);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    };
    fetch('/route/acceptInvite', requestOptions);
  };

  const declineInvite = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    };
    fetch('/route/declineInvite', requestOptions);
  };
  
  // const checkInvite = () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ user }),
  //   };
  //   fetch('/route/checkInvite', requestOptions);
  // };
  // const [invites, updateInvites] = useState([ ])
  // useEffect(() => {
  //   // checkInvite()
  //   //   .then((data)=> {console.log('data', data)})
  //   let userID = user.id;
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   };
  //   fetch(`/route/checkInvite/${userID}`, requestOptions)
  //   .then((data)=> {
  //     data.json()})
  //   .then((response) => {
  //     console.log(response)

  //   })
  //   }, []);

  //imported from myRoutes
  const getMyRoute = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    // console.log(`${user.id}`, 'USER');
    const response = await fetch(`/route/InviteRouteGetter/${user.id}`, requestOptions);
    response
      .json()
      .then((data) => {
        // console.log(data, 'HERE iS THE DATA');
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
    fetch(`/route/InviteRouteGetter/${user.id}`, requestOptions)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        myRoutesUpdate(response);
      });
  }, []);


  return (
    <div>
      <button
        onClick={() => {
          acceptInvite();
        }}
      >
        Accept Invite
      </button>
      <button
      onClick={() => {
        declineInvite();
      }}
      >
      Decline Invite
      </button>
      <h1> Invitation to Route: </h1>
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
  );
};
export default Invites;
