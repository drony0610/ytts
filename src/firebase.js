// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "dotenv/config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfVQQ2PoSRJg7H6ibvVtNM9okqnY3P2lo",
  authDomain: "ytts-9ddae.firebaseapp.com",
  projectId: "ytts-9ddae",
  storageBucket: "ytts-9ddae.appspot.com",
  messagingSenderId: "143825449379",
  appId: "1:143825449379:web:ba128f2b9bc9591a0bea16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
