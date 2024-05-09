import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj3sDeFSrZQjvI0zFcH7AlqkuWlLrC_7g",

  authDomain: "gardichat-b534e.firebaseapp.com",

  projectId: "gardichat-b534e",

  storageBucket: "gardichat-b534e.appspot.com",

  messagingSenderId: "53066428550",

  appId: "1:53066428550:web:0420cd8699b336dd59a107",
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
