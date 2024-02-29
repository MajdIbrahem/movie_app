// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
export const firebaseConfig = {
    apiKey: "AIzaSyDTOCq1DOGa9iyHg7Kbp6ICvNewCOGhJKg",
    authDomain: "movie-app-42dbe.firebaseapp.com",
    projectId: "movie-app-42dbe",
    storageBucket: "movie-app-42dbe.appspot.com",
    messagingSenderId: "117854110395",
    appId: "1:117854110395:web:bf10bd75c3160907bc9f9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app