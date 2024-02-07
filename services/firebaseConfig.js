import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhydUJjXwQF_ZeOcvdzB3Toqk0Qc5v6cg",
  authDomain: "minigamecalculator.firebaseapp.com",
  projectId: "minigamecalculator",
  storageBucket: "minigamecalculator.appspot.com",
  messagingSenderId: "576562316539",
  appId: "1:576562316539:web:9f10e24f04af5f0839dc5e",
  measurementId: "G-BXZ56PW5SW"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

