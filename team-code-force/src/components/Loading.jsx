import React from 'react';
import { spinner } from './images/loading.gif';

const Loading = () => {

  return (
    <div className="loading">
      <img src={spinner} alt="loading..." />
      <p>Loading . . .</p>
    </div>
  );
};

export default Loading;
