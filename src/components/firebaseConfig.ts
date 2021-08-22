import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKF0Wlv1fVGJTAYafWI0LPoS7mgqLAnVk",
    authDomain: "portfolio-contact-form-6ddf2.firebaseapp.com",
    projectId: "portfolio-contact-form-6ddf2",
    storageBucket: "portfolio-contact-form-6ddf2.appspot.com",
    messagingSenderId: "305955296161",
    appId: "1:305955296161:web:af32b5698cf9c429af31e0"
});

var db = firebaseApp.firestore();

export { db };