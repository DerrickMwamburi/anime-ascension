// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfbH4yfzcvHLQ57dgIDYboFeeFdzbELOM",
  authDomain: "anime-ascension.firebaseapp.com",
  projectId: "anime-ascension",
  storageBucket: "anime-ascension.firebasestorage.app",
  messagingSenderId: "853913987245",
  appId: "1:853913987245:web:bf1cd07d71507443923e24",
  measurementId: "G-W3TMT1N70B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);