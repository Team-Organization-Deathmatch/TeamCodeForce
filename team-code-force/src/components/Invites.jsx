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
  
  const checkInvite = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user }),
    };
    fetch('/route/checkInvite', requestOptions);
  };
  const [invites, updateInvites] = useState([ ])
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
    </div>
  );
};

export default Invites;
