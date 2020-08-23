import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
//Seb & Christopher's
const Invites = ({ user }) => {
  let [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get('http://localhost:8000/notify/routechange')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  //end seb & c's
  
  
// =======
// const { REACT_APP_SERVER_PORT } = process.env;
// const Invites = () => {
//   let [users, setUsers] = useState()

//   useEffect(() => {
//     axios.post(`http://localhost:${REACT_APP_SERVER_PORT}/notify/invite`, { number: '+12163859616'}).then((data) => {
//       console.log(data);
//     })
//     .catch(err => console.log(err))
//   }, [])
// >>>>>>> master

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

  return (
    <div>
      <button
        onClick={() => {
          acceptInvite();
        }}
      >
        Accept Invite
      </button>
      <button>Decline Invite</button>
    </div>
  );
};

export default Invites;
