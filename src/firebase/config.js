// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5hNLwS4xBRbTup2-MgCv0FkrLmF1L-A0",
  authDomain: "react-journal-app-1391a.firebaseapp.com",
  projectId: "react-journal-app-1391a",
  storageBucket: "react-journal-app-1391a.firebasestorage.app",
  messagingSenderId: "553411705108",
  appId: "1:553411705108:web:b651b5c34c5e4cbed42a01"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)