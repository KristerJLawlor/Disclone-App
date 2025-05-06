import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    //firebase config
    apiKey: "AIzaSyAjOxQ5TsS1tAyot9aK9C1xPrnJIS-Xf10",
    authDomain: "disclone-bfeff.firebaseapp.com",
    projectId: "disclone-bfeff",
    storageBucket: "disclone-bfeff.firebasestorage.app",
    messagingSenderId: "118152053977",
    appId: "1:118152053977:web:809168cba9e1e9a4a32ac8",
    measurementId: "G-330NDKTDST"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
//export default db

/*
In the Firebase console, go to the Authentication section and enable Google sign-in method.
'firebase login'

Initiate the project with the command:
firebase init

To deploy the project, use the command:
firebase deploy

*/