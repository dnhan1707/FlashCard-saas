// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQAyBxGuydRN6iuGxS-R3N4cxrhhma9nA",
  authDomain: "flashcard-f3373.firebaseapp.com",
  projectId: "flashcard-f3373",
  storageBucket: "flashcard-f3373.appspot.com",
  messagingSenderId: "40348050484",
  appId: "1:40348050484:web:dc3a727d27bef87155d661",
  measurementId: "G-JTC7VH2DZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);