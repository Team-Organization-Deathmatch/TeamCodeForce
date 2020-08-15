import React from 'react';
import './Activities.css';

// List national parks that have a particular activity
const ActivitiesParks = ({resultingParks}) => {

  return (
    <div className="activities-parks">
      <h4>Parks with your favorite activities:</h4>
      <ul>
      {resultingParks.map(({id, name, parks}) => {
        return (
          <div className="activities-list-item">
            <li id={id}><b>{name}</b></li>
            <br/>
            <div className="activity-parks-list">
              <ul>
                {parks.map(({states, fullName, url}) => {
                  return (
                    <li className="activity-park-list-item"><a href={url} target="_blank">{fullName}</a></li>
                  )
                })}
              </ul>
            </div>
            <br />
            <br />
          </div>
        )
      })}
      </ul>
    </div>
  );
};

export default ActivitiesParks;