import React, { useEffect, useState } from 'react';

const Wishlist = ({ userID }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    async function getWishList(data) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: data }),
      };
      const response = await fetch('/park/wishlist/get', requestOptions);
      response.json().then((data) => setWishList(data));
    }
    getWishList(userID);
  }, [userID]);

  return (
    <div>
      {wishList.map((park) => (
        <h6>
          <h3 key={park.id}>{park.name}</h3>
          <small><a href={park.url} target="_blank" rel="noopener noreferrer">{park.url}</a></small>
        </h6>
      ))}
    </div>
  );
};
export default Wishlist;
