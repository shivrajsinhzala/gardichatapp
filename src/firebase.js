import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpqhcJQsrEcb1ZcUBausK4XCzH0mR0nuM",

  authDomain: "gardichat-eee7d.firebaseapp.com",

  projectId: "gardichat-eee7d",

  storageBucket: "gardichat-eee7d.appspot.com",

  messagingSenderId: "1081717501587",

  appId: "1:1081717501587:web:f0e59afed5eae1874f2766",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
