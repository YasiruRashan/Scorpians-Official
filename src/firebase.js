// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCW_bsTH6HmkpXza2kk12qZFPzI5xNuxLg",
    authDomain: "my-dashboard-f1e34.firebaseapp.com",
    databaseURL: "https://my-dashboard-f1e34.firebaseio.com",
    projectId: "my-dashboard-f1e34",
    storageBucket: "my-dashboard-f1e34.appspot.com",
    messagingSenderId: "345976441500",
    appId: "1:345976441500:web:42a8a1b61919dac84cbb59",
    measurementId: "G-KHXL885DJS"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;