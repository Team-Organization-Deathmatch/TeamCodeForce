import React from 'react';
import ActivitiesList from './ActivitiesList';

function ActivitiesSearchForm({parkActivities, handleChange, handleSearchClick, clearSearch}) {

  // // Activities Search Form Clear click handler
  // // Clears Search Form and results
  // const handleClearClick = (event) => {
  //   clearSearch;
  // }

  return (
    <form className="activities-search-form">
      <h4>Choose your favorite park activities:</h4>
      <ActivitiesList parkActivities={parkActivities} handleChange={handleChange}/>
      <br />
      <button className="button" type="button" onClick={handleSearchClick}>Search</button>
      {/* <button className="button" type="button" onClick={handleClearClick}>Clear</button> */}
      <br />
    </form>
  );
}

export default ActivitiesSearchForm;
