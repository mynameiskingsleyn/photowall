// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBh_IrpB8_E7uZvD_xKHqBILMW2c1KZSsY",
  authDomain: "photowall-7cc79.firebaseapp.com",
  databaseURL: "https://photowall-7cc79.firebaseio.com",
  projectId: "photowall-7cc79",
  storageBucket: "photowall-7cc79.appspot.com",
  messagingSenderId: "292981975108",
  appId: "1:292981975108:web:2f3fa66d752ab1cdadf411"
};

// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig); //initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {database}
