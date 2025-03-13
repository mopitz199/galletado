// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "galletado-5023a.firebaseapp.com",
  projectId: "galletado-5023a",
  storageBucket: "galletado-5023a.firebasestorage.app",
  messagingSenderId: "322987504031",
  appId: "1:322987504031:web:5760a51365dcb52aa54daa",
  measurementId: "G-3TDXSDJNY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);