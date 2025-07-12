// src/firebase.js

// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIN_0IIYfkobn4a-GLS1fABQg4XZXL8zo",
  authDomain: "sakthihospital-f166b.firebaseapp.com",
  databaseURL: "https://sakthihospital-f166b-default-rtdb.firebaseio.com",
  projectId: "sakthihospital-f166b",
  storageBucket: "sakthihospital-f166b.firebasestorage.app",
  messagingSenderId: "350238964953",
  appId: "1:350238964953:web:74c7bfc91e81a3000812c8",
  measurementId: "G-0XPTR1V21B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Export the database so it can be used in other files
export { database };
