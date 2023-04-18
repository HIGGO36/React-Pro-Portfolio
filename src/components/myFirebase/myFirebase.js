import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const myFirebase = firebase;
export default myFirebase;