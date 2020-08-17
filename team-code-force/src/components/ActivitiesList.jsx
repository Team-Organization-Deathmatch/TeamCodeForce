import React from 'react';

// List all activities possible in national parks
function ActivitiesList({ parkActivities, handleChange }) {
  return (
    <div className="activities-list">
      {/* {parkActivities.map(({id, name}) => {
        return (
          <label>
            <input type="checkbox" id={id} value={name} onChange={handleChange}/>
            {name}
            <br />
          </label>
        )
      })} */}
      <select multiple={true} size={10} onChange={handleChange}>
        {parkActivities.map(({ id, name }) => {
          return (
            <option key={id} id={id} value={name}>{name}</option>
          );
        })}
      </select>
    </div>
  );
};

export default ActivitiesList;
