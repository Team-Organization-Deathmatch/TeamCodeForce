/* eslint-disable no-console */
/* eslint-disable arrow-parens */
import React from 'react';

const InfoWindow = ({ url, name, desc, image, user }) => {
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

  const addToRoutes = () => {
    console.log('THIS WILL ADD TO ROUTES');
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
      <button onClick={() => addToRoutes()}>Add To Routes</button>
      <br />
    </div>
  );
};

export default InfoWindow;
