// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8c_rLCwWptTLAlpOamD6NYZmH5w6q0YI",
  authDomain: "writer-c60a7.firebaseapp.com",
  databaseURL: "https://writer-c60a7-default-rtdb.firebaseio.com",
  projectId: "writer-c60a7",
  storageBucket: "writer-c60a7.firebasestorage.app",
  messagingSenderId: "615914714315",
  appId: "1:615914714315:web:6064f2e2d723f484bad74e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { db }