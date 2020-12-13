 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyC2G4GZJTZeptdAfySxrZQ-WVRNPBaTWUA",
    authDomain: "mario-plan-739e0.firebaseapp.com",
    projectId: "mario-plan-739e0",
    storageBucket: "mario-plan-739e0.appspot.com",
    messagingSenderId: "203418298429",
    appId: "1:203418298429:web:dede09780cbaf423cba254"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;