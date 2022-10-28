// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.FIREBASE_API_KEY",
  authDomain: "dta-cache.firebaseapp.com",
  databaseURL: "https://dta-cache-default-rtdb.firebaseio.com",
  projectId: "dta-cache",
  storageBucket: "dta-cache.appspot.com",
  messagingSenderId: "792610761869",
  appId: "1:792610761869:web:ca71900e81ba2a40c2c6c4",
  measurementId: "G-9M16NRF0PC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
