/* eslint-disable no-console */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';

const ParkHistory = ({ userID }) => {
  const [history, setHistory] = useState([]);
  // useEffect(() => {}, [history]);

  const getHistory = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`/park/history/get/${userID}`, requestOptions);
    console.log('TESTING FOR GET HISTORY');
    response.json().then((responseJson) => setHistory(responseJson));
    return;
  };

  // useEffect(() => {
  //   debugger;
  //   getHistory();
  // });
  const deleteHandler = (id, name) => {
    const requestOptions = {
      method: 'DELETE',
      credentials: 'include',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    };
    return fetch(`/park/history/delete/${id}/${name}`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => getHistory(userID));
  };

  return (
    <div>
      {history.map((park) => (
        <div>
          <h3 key={park.id}>
            {park.name}{' '}
            <button
              type='button'
              onClick={() => deleteHandler(userID, park.name)}
            >
              X
            </button>
          </h3>
          <small>
            <a href={park.url} target='_blank' rel='noopener noreferrer'>
              {park.url}
            </a>
          </small>
        </div>
      ))}
    </div>
  );
};
export default ParkHistory;
