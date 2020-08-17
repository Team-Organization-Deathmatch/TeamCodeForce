import React from 'react';
import './Activities.css';

// List national parks that have a particular activity
function ActivitiesParks({ resultingParks }) {
  return (
    <div className="activities-parks">
      <h2>Parks with your favorite activity:</h2>
      {resultingParks.map(({ id, name, parks }) => (
        <div className="selected-activity" key={id}>
          <h2>{name}</h2>
          <br />
          {parks.map(({ fullName, url }) => (
            <div className="activity-park" key={url}>
              <li><a href={url} target="_blank" rel="noopener noreferrer">{fullName}</a></li>
              <br />
            </div>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

export default ActivitiesParks;
