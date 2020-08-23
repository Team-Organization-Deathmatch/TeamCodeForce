import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

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
