import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAJjrbdSvTLlvVzNoExZcoXDLBraZplDj4",
    authDomain: "twitter-clone-37caa.firebaseapp.com",
    projectId: "twitter-clone-37caa",
    storageBucket: "twitter-clone-37caa.appspot.com",
    messagingSenderId: "173628701461",
    appId: "1:173628701461:web:25157090659b1b5e4ec71c",
    measurementId: "G-GLZ2DB1X5F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
