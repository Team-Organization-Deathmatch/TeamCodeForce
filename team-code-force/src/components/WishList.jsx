import React, { useEffect, useState } from 'react';

const Wishlist = ({ userID }) => {
  const [wishList, setWishList] = useState(['Please Add Some Parks!']);
  useEffect(() => {}, [wishList]);

  const getWishList = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(
      `/park/wishlist/get/${userID}`,
      requestOptions
    );
    response.json().then((data) => setWishList(data));
    console.log('hello');
  };

  // useEffect(() => {
  //   getWishList(userID);
  // });

  const deleteHandler = (id, name) => {
    console.log('click');
    const requestOptions = {
      method: 'DELETE',
      credentials: 'include',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    };
    return fetch(`park/wishlist/delete/${id}/${name}`, requestOptions)
      .then((response) => response.json())
      .then(() => getWishList(userID));
  };

  return (
    <div>
      {wishList.map((park) => (
        <div key={park.id}>
          <h3>
            {park.name}{' '}
            <button onClick={() => deleteHandler(userID, park.name)}>X</button>
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
export default Wishlist;
