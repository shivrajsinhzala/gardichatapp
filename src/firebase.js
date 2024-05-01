import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS9ry3Up9lM32H9zJZgMDJPT9bOl7mScY",

  authDomain: "gardichat-545ea.firebaseapp.com",

  projectId: "gardichat-545ea",

  storageBucket: "gardichat-545ea.appspot.com",

  messagingSenderId: "896221885541",

  appId: "1:896221885541:web:348e2c5ee147cd84c4428c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
