# Disclone-App

This Application is an attempt to replicate the functionalities and experience of Discord, a popular messaging and voice app used by over 150 million users.

The framework used for this application is MERN:
-Backend requires MongoDB, Express.js
-Frontend requires React and Node.js

External API(s) required to be installed to run the features in Disclone:
-Pusher-js to live update UI elements. It triggers when the Cluster at MongoDB experiences a change in data (insert, update, or removal)
-Firebase is used for login and authentication

INSTRUCTIONS:
To run the application's backend (port 3000), you must run
  - npx tsc
  - node dist/index.js
  - open http://localhost:3000 

    
To run the frontend (port 3001), run 
  - npm start
  - open http://localhost:3001
