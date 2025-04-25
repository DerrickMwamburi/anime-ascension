import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBfbH4yfzcvHLQ57dgIDYboFeeFdzbELOM",
    authDomain: "anime-ascension.firebaseapp.com",
    projectId: "anime-ascension",
    storageBucket: "anime-ascension.firebasestorage.app",
    messagingSenderId: "853913987245",
    appId: "1:853913987245:web:bf1cd07d71507443923e24",
    measurementId: "G-W3TMT1N70B"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  