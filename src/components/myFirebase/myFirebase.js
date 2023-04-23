import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 

// loading the environment variables from the .env file into the process.env object.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
};


//  check if there are no Firebase apps initialized yet
if (!firebase.apps.length) {

//  initialize Firebase with the configuration object.
  firebase.initializeApp(firebaseConfig);
}

// export myFirebase as the initialized Firebase instance
const myFirebase = firebase;

// adding firestore firebase realtime database
const db = firebase.firestore(); 

// exporting both myFirebase and the db objects
export { myFirebase, db };