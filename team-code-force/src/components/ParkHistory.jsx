import React, { useEffect, useState } from 'react';

const ParkHistory = ({ userID }) => {
  const [history, setHistory] = useState(['Please Add Some Parks!']);

  const getHistory = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID: data }),
    };
    const response = await fetch('/park/history/get', requestOptions);
    response.json().then((data) => setHistory(data));
  };

  useEffect(() => {
    getHistory(userID);
  }, [userID]);

  const deleteHandler = (id, name) => {
    // console.log('click');
    const requestOptions = {
      method: 'DELETE',
      credentials: 'include',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    };
    return fetch(`http://localhost:5000/park/history/delete/${id}/${name}`, requestOptions)
      .then((response) => response.json())
      .then(data => console.log(data))
      .then(() => getHistory(userID));
  };

  return (
    <div>
      {history.map((park) => (
        <h6>
          <h3 key={park.id}>
            {park.name} 
            <button type="button" Click={() => deleteHandler(userID, park.name)}>X</button>
          </h3>
          <small><a href={park.url} target="_blank" rel="noopener noreferrer">{park.url}</a></small>
        </h6>
      ))}
    </div>
  );
};
export default ParkHistory;
