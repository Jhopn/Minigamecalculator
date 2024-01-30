// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBhydUJjXwQF_ZeOcvdzB3Toqk0Qc5v6cg",
  authDomain: "minigamecalculator.firebaseapp.com",
  projectId: "minigamecalculator",
  storageBucket: "minigamecalculator.appspot.com",
  messagingSenderId: "576562316539",
  appId: "1:576562316539:web:9f10e24f04af5f0839dc5e",
  measurementId: "G-BXZ56PW5SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;


//     const errorMessage = error.message;
//     // ..
//   });