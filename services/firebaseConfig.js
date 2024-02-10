import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence   } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

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

export const db = getFirestore(app);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



