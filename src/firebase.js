// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-reactjs-cd59f.firebaseapp.com",
  projectId: "crud-reactjs-cd59f",
  storageBucket: "crud-reactjs-cd59f.appspot.com",
  messagingSenderId: "565509160832",
  appId: "1:565509160832:web:f7292aa4b43d245112cb65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
