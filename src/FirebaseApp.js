// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/database";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkS7Ii6zeNdEgJ6lN3C6EVLlF9cEgtS2k",
  authDomain: "ekirana-444b8.firebaseapp.com",
  projectId: "ekirana-444b8",
  storageBucket: "ekirana-444b8.appspot.com",
  messagingSenderId: "314937108903",
  appId: "1:314937108903:web:68b835ff84c8d91addee82",
  measurementId: "G-DP8EFT4E42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
