import React from 'react';
import './Activities.css';


// List national parks that have a particular activity
function ActivitiesParks({resultingParks}) {

  return (
    <div className="activities-parks">
      <h4>Parks with your favorite activities:</h4>
      <ul>
      {resultingParks.map(({id, name, parks}) => {
        return (
          <div>
            <li className="activities-list-item" key={id} id={id}><b>{name}</b></li>
            <br/>
            <div className="activity-parks-list">
              <ul>
                {parks.map(({states, fullName, url, parkCode}) => {
                  return (
                    <li className="activity-park-list-item" key={parkCode}><a href={url} target="_blank">{fullName}</a></li>
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