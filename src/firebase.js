// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGDGUW8hcuBnrYFBT8-bizE0EDPWYeu8",
  authDomain: "nibbleapp-f51db.firebaseapp.com",
  projectId: "nibbleapp-f51db",
  storageBucket: "nibbleapp-f51db.appspot.com",
  messagingSenderId: "239679994077",
  appId: "1:239679994077:web:f0d094d19b3946a3024334",
  measurementId: "G-D7GKXQ0Y7S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);




