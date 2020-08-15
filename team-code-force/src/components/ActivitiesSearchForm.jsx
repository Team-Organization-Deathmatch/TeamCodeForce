import React from 'react';
import ActivitiesList from './ActivitiesList';

const ActivitiesSearchForm = ({parkActivities, handleChange, handleSearchClick}) => {

  return (
    <form className="activities-search-form">
      <h4>Choose your favorite park activities:</h4>
      <ActivitiesList parkActivities={parkActivities} handleChange={handleChange}/>
      <br />
      <button className="button" type="button" onClick={handleSearchClick}>Search</button>
      <br />
    </form>
  );
};

export default ActivitiesSearchForm;