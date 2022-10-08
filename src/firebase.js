// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuS3aiOwFQ-VXAApndP4cqJF2E8Cpk1Og",
  authDomain: "react-contact-form-61955.firebaseapp.com",
  projectId: "react-contact-form-61955",
  storageBucket: "react-contact-form-61955.appspot.com",
  messagingSenderId: "383541407555",
  appId: "1:383541407555:web:1a8936f4ec3a626ebac9f6",
  measurementId: "G-HE1Q6C765W",
})
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var db = firebaseApp.firestore();
export { db }