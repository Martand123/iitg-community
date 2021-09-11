import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPUDtRWpqgizPc4E4iu6huCnAT4pL1hJU",
    authDomain: "iitg-community.firebaseapp.com",
    projectId: "iitg-community",
    storageBucket: "iitg-community.appspot.com",
    messagingSenderId: "909552791387",
    appId: "1:909552791387:web:96c05a808c32217026b47e",
    measurementId: "G-LE61W9BNX4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();


export  { auth , db , provider};
// export default db;
