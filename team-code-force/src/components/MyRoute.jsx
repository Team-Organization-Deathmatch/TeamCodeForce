import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  let counterStart = 0, counterEnd = 0;
  const handleDate = (date) => {
    setDate(date);
  };

  const calenderStart = () => {
    counterStart++;
    return <form onSubmit={() => {
      console.log(recordDate, counterStart);
    }}>
      <div className="form-group">
      <DatePicker
        selected={recordDate}
        onChange={handleDate}
        name="startDate"
        title="Enter a start date"
        dateFormat="MM-dd-yyyy"
      />
      <button className="btn btn-primary">Show Date</button>
    </div>
  </form>
  };

  const calenderEnd = () => {
    counterEnd++;
    return <form onSubmit={() => {
      console.log(recordDate);
    }}>
      <div className="form-group">
      <DatePicker
        selected={recordDate, counterEnd}
        onChange={handleDate}
        name="startDate"
        title="Enter an end date"
        dateFormat="MM-dd-yyyy"
      />
      <button className="btn btn-primary">Show Date</button>
    </div>
  </form>
  }

  const [myRoutes, myRoutesUpdate] = useState([{ park1: 5 }]);
  const [recordDate, setDate] = useState('');

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
      <div className='Routes'>
        {myRoutes.map((route) => {
          return <div key={route.id}>
            <br />
            <div>{route.park}</div>
            <br />
            <br />
            <div>{calenderStart()}</div>
            <div> {calenderEnd()} </div>
          </div>;
        })}
      </div>
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
