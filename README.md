# CodeForce

National Park Pal is an app that helps users find National parks in any state.
When the site is visited, the homepage with the park slideshow renders. Park and activity search are not availiable for users not logged in. 


USER STORY:

1. User clicks login to sign in with google.
    - Takes the user to another page to log in

2. After the user logs in, they're redirected back to the homepage. User is authorized to use the park search, Activity search and can also render a profile.

3. Park Search
    - Able to enter a starting and ending destination
    - Map renders a route based on lcations provided
    - The map will show all the national parks along the route
    - When clicking on a national park icon, a popup renders, and you're able to see a photo from the park, be able to add to wishlist (displayed in profile), also you can specify if you've already been to the park.

4. Activity Search
    - The activity shows a list of all availiable activities. 
    - When the user clicks on an activity, page renders a list of parks who have the activity available.
    - The parks listed are an active link, the link will take you to a site with more information about the activity you chose.

5. Profile Page
    - The user has a profile. The profile has the users photo, and park wishlist of all the parks the user added.


Developer Information:

run npm install

Add .env file inside of the team-code-force/src/components folder and the team-code-force folder with the following variables:
Env variables:
    SERVER_PORT=5000
    DB_NAME=parksdb
    DB_USER=root
    DB_HOST=localhost
    DB_PASS=
    REACT_APP_SERVER_PORT=5000

* note - mysql database should be running when testing page
* $ npm run dev - starts the server and runs build

Npm Packages: 

1. Slideshow
    - npm install react-slideshow-image -S

2. Authentication - Passport
    - 

3. Maps - Google maps API
    - 
