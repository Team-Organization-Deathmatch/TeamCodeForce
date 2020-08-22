import React from 'react';

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

  const getMyRoute = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({user}),
    };
    fetch('/route/get/:id', requestOptions)
    .then((response) => response.json())
    .then((responseJson) => console.log(responseJson))
  }

  }

  const [myRoutes, myRoutesUpdate] = useState([]);

  return (
    <div>
      <div> MY ROUTES TESTING </div>
      <button
        onClick={() => {
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
      <div class='Routes'>
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
      </div>
    </div>
  );
};

export default MyRoute;
