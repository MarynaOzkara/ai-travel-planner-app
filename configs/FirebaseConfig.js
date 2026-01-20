// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVn4WwxkFBmAy2EU8ZhMPiisDwHQhzrHQ",
  authDomain: "travel-planner-c3bdf.firebaseapp.com",
  projectId: "travel-planner-c3bdf",
  storageBucket: "travel-planner-c3bdf.firebasestorage.app",
  messagingSenderId: "79248691720",
  appId: "1:79248691720:web:98664305b3c3f36eb577bd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
