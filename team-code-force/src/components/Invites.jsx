import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const Invites = () => {
  let [users, setUsers] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/notify/routechange').then((data) => {
      console.log(data);
    })
    .catch(err => console.log(err))
  }, [])

  return (<div> 
    TESTING 1 2 3 
    </div>);
};

export default Invites;
