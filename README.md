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



*Disclone Examples*
-general UI-

![1](https://github.com/user-attachments/assets/4993264e-7149-40e4-a7ff-1644695cbb14)


-adding a channel-

![2](https://github.com/user-attachments/assets/edd01f1d-188c-44c3-a99e-14ce745fc32f)

user is prompted for channel name.

![3](https://github.com/user-attachments/assets/4b164cf8-0266-4669-a726-5c57875cde10)

After channel name is entered, an insert request is triggered. Response as seen from the backend is above. 

![4](https://github.com/user-attachments/assets/6e3d74dd-d5e7-411d-b495-f934aa4fa757)

Channel list is retrieved again after data has been added to the MongoDB Cluster.


-live updating of messages via pusher-

![disclone gif](https://github.com/user-attachments/assets/678f7acb-6c5d-41c8-bab6-2b888b1e0a4a)

New messages are live updated through pusher-js triggering when data is inserted in to the mongoDB cluster. 
It uses the conversation object _id to identify where to insert on the backend.

![5](https://github.com/user-attachments/assets/2e7be7d7-3f19-4995-928e-acdde9d0ce5a)
![6](https://github.com/user-attachments/assets/828a97df-3f92-415a-a25d-9c64936ed319)

-MongoDB message structure-

![7](https://github.com/user-attachments/assets/38181e2f-ba38-4734-8014-46e572ba7561)
