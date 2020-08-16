import React, { useEffect, useState } from 'react';

const Wishlist = ({ userID }) => {
  const [wishList, setWishList] = useState(['Please Add Some Parks!']);
  useEffect(() => {

  }, [wishList]);

  const getWishList = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID: data }),
    };
    const response = await fetch('/park/wishlist/get', requestOptions);
    response.json().then((data) => setWishList(data));
  }

  useEffect(() => {
    // async function getWishList(data) {
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ userID: data }),
    //   };
    //   const response = await fetch('/park/wishlist/get', requestOptions);
    //   response.json().then((data) => setWishList(data));
    // }
    getWishList(userID);
  }, [userID]);

  
  const deleteHandler = (id, name) => {
    // console.log('click');
    const requestOptions = {
      method: 'DELETE',
      credentials: 'include',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    }
    return fetch(`http://localhost:5000/park/wishlist/delete/${id}/${name}`, requestOptions)
    .then((response) => response.json())
    .then(() => getWishList(userID))
  }

  return (
    <div>
      {wishList.map((park) => (
        <h6 key={park.id}>
          <h3>{park.name} <button onClick={() => deleteHandler(userID, park.name)}>X</button></h3>
          <small><a href={park.url} target="_blank" rel="noopener noreferrer">{park.url}</a></small>
        </h6>
      ))}
    </div>
  );
};
export default Wishlist;
