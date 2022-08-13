// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDL4SDii6_ASAShOcKGZZ-wF44KQymREY",
  authDomain: "upload-and-list-website.firebaseapp.com",
  projectId: "upload-and-list-website",
  storageBucket: "upload-and-list-website.appspot.com",
  messagingSenderId: "825686114663",
  appId: "1:825686114663:web:98b0ff4b40a04d32766fc2",
  measurementId: "G-2V1Z99TS0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);