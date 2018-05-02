## Run the starting point

1. `npm i`
2. `npm run seed`
3. `npm run build`
4. `npm start`

## Directory structure
`/assets` contains stylesheets.

`/client` contains React components and a Redux store.

`client` has been reorganized into a new directory structure.  These are actions, components, reducers, and selectors
1. actions- This contains all action and thunk method files to interact with redux store
2. components- This is divided by feature, rather than my components and containers.  This is currently divided into appointment, common (shared), home, and login.  Further refinement may be warranted as functionality is iterrated on
3. reducers- This contains the various reducer files and the index.js to combine the reducers for use to interact with the redux store.
4. selectors- This contains various helper methods used to convert data as needed by the UI for display purposes.

`/files` is an empty directory for storing patient files.

`/public` is where the code from `/client` is compiled to.

`/server` contains an Express server, routes, and the database config.

## Logging in
Running the seed script seeds the database, including some users we've created for you. You can use any user's email address and password to log in to the app as that user.

**Assumptions**
1. The patient cancelation is a hard delete, no view of the data is required after deletion
2. Only one doctor is present in seed data, so appointments are always scheduled with them.

**Client TODOs**
1. The Doctor functionality still needs to be implemented.  This includes integrating a search API with the doctor search, declining appointments, etc
2. Further unit testing needs to be done.  In the interest of time an effort was made to demonstrate unit testing of each *type* of class, however further coverage is required

**Server TODOs**
1. Search API functionality needs to be built.  Had trouble getting a generic query to work, only Id queries seemed to work.  More look into lowdb is required on my part.
2. Current setup is clean and simple.  If any further logic is required in API's, a separate layer could be useful to abstract this logic out of routing class.  This will also enable cleaner unit tests
3. Time did not allow me to troubleshoot my webpack/node unit test issue.  I did include a sample of how I would like to test routers.  
