import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCW_bsTH6HmkpXza2kk12qZFPzI5xNuxLg",
  authDomain: "my-dashboard-f1e34.firebaseapp.com",
  databaseURL: "https://my-dashboard-f1e34-default-rtdb.firebaseio.com",
  projectId: "my-dashboard-f1e34",
  storageBucket: "my-dashboard-f1e34.appspot.com",
  messagingSenderId: "345976441500",
  appId: "1:345976441500:web:42a8a1b61919dac84cbb59",
  measurementId: "G-KHXL885DJS"

  };

firebase.initializeApp(firebaseConfig);

export const firebaseAuth  = firebase.auth();
//export const firestore = firebase.firestore();
export default firebase;