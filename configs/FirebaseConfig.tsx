// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnnk9kS2par8loBwgtfdRdKrdmS4suRyM",
  authDomain: "my-projects-70264.firebaseapp.com",
  projectId: "my-projects-70264",
  storageBucket: "my-projects-70264.firebasestorage.app",
  messagingSenderId: "181936337300",
  appId: "1:181936337300:web:ea0b1decbc61e0fcf01f81",
  measurementId: "G-SSY5P346QR"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
