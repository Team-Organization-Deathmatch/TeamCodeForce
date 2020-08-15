import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivitiesSearchForm from './ActivitiesSearchForm';
import ActivitiesParks from './ActivitiesParks';
import Loading from './Loading';
import { nps } from './.config';


// Search parks by activities available in national parks
function Activities() {

  // Declare new state variables
  const [parkActivities, setParkActivities] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [resultingParks, setResultingParks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // Park Activities Search click handler
  // Updates resulting parks with user selected activities
  const handleSearchClick = (event) => {
    const searchIds = userActivities.join(',');
    axios.get(`https://developer.nps.gov/api/v1/activities/parks?id=${searchIds}&api_key=${nps.NPS_API_KEY}`)
      .then(res => {
        const currentParks = res.data.data;
        setResultingParks(currentParks);
      })
      .catch(error => {
        console.log(error)
      })
  }


  // Clears Park Activities Search
  const clearSearch = () => {
    setUserActivities([]);
    setResultingParks([]);
  }


  // Activities change handler
  // Updates user selected activities
  const handleChange = (event) => {
    // // Checkboxes
    // // Declare variables for current event checkbox
    // const checked = event.target.checked;
    // const activityId = event.target.id;  // Only Activity IDs can be comma delimited when retrieving parks

    // // Declare array variable for user selected activities
    // const selectedIds = [...userActivities];

    // // Find index of current activity in selected array
    // const index = selectedIds.indexOf(activityId);

    // // If checked and activity ID is not in selected array, add activity ID to array
    // if (checked && index === -1) {
    //   selectedIds.push(activityId);
    // } // Else if unchecked and activity ID is in selected array, remove activity ID from array
    // else if (!checked && index > -1) {
    //   selectedIds.splice(index, 1);
    // }

    // setUserActivities(selectedIds);

    // Multiple Select Box
    // Declare variable for selected options
    const selectedOptions = event.target.selectedOptions;
    console.log(selectedOptions);

    // Declare variable for favorites array
    const selectedIds = Array.from(selectedOptions, (item) => item.id);

    // Update favorite activities state
    setUserActivities(selectedIds);
  }


  // Execute on every update to parkActivities
  useEffect(() => {
    // Confirm update of setParkActivities on page load
    // console.log('Park Activities update', parkActivities);
  }, [parkActivities]);


  // Execute on every update to userActivities
  useEffect(() => {
    // Confirm update of setUserActivities in handleChange
    // console.log('Favorites update', userActivities);
  }, [userActivities]);


  // Execute on every update to resultingParks
  useEffect(() => {
    // Confirm update of setResultingActivities in handleClick
    // console.log('Search update', resultingParks);
  }, [resultingParks]);


  // Retrieve all activity categories in national parks upon initial rendering of page
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://developer.nps.gov/api/v1/activities?api_key=${nps.NPS_API_KEY}`)
      .then(res => {
        const currentActivities = res.data.data;
        setParkActivities(currentActivities);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  // Render Activities component
  return (
    <div className="activities">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="activities-search">
          <ActivitiesSearchForm
            parkActivities={parkActivities}
            handleChange={handleChange}
            handleSearchClick={handleSearchClick}
            clearSearch={clearSearch}
          />
          <hr />
          <ActivitiesParks resultingParks={resultingParks} />
        </div>
      )}
    </div>
  )
}


export default Activities;