import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAS4EkFP9e5jHL3PIFzUiS_8XKB77pt43g",
    authDomain: "uccalendarapp.firebaseapp.com",
    databaseURL: "https://uccalendarapp-default-rtdb.firebaseio.com/",
    projectId: "uccalendarapp",
    storageBucket: "uccalendarapp.appspot.com",
    messagingSenderId:  "706104387162",
    appId: "706104387162:web:62dc18a57e089a56fb5a63",
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth();
export default app;