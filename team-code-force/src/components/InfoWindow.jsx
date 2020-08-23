/* eslint-disable no-console */
/* eslint-disable arrow-parens */
import React from 'react';
import axios from 'axios';

const InfoWindow = ({ url, name, desc, image, user, lat, lng }) => {
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 20,
    fontSize: 14,
    zIndex: 100,
  };

  const picStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const saveWishlist = (data) => {
    console.log(data, 'data');
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, userID: data.id, url }),
    };
    fetch('/park/wishlist', requestOptions)
      .then((response) => response.json())
      .then((parkData) => console.log(parkData));
  };

  const saveParkHistory = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, userID: data.id, url }),
    };
    fetch('/park/history', requestOptions)
      .then((response) => response.json())
      .then((responeJson) => console.log(responeJson));
  };

  const addToRoutes = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, userID: data.id, lat, lng }),
    };
    fetch('/route/addToRoute', requestOptions)
      // .then((response) => response.json())
      .then((data) => {
        console.log(data, 'DATA BEING RETURNED FROM ADD TO ROUTES');
        // return data;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={infoWindowStyle}>
      <div style={{ fontSize: 16 }}>{name}</div>
      <br />
      <img style={picStyle} src={image} alt='Park' />
      <br />
      <br />
      <div>{desc}</div>
      <br />
      <div>
        Park Website:
        <br />
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {url}
        </a>
      </div>
      <br />
      Add parks to your profile!
      <br />
      <br />
      <button
        style={{ marginRight: '20px' }}
        onClick={() => saveWishlist(user)}
      >
        WishList
      </button>
      <button onClick={() => saveParkHistory(user)}>Seen It!</button>
      <button onClick={() => addToRoutes(user)}>Add To Routes</button>
      <br />
    </div>
  );
};

export default InfoWindow;
