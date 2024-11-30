// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRwNrOdmxQi9hZRalbkL0xbj2PYYWut-I",
    authDomain: "coffee-store-93a2f.firebaseapp.com",
    projectId: "coffee-store-93a2f",
    storageBucket: "coffee-store-93a2f.firebasestorage.app",
    messagingSenderId: "262963863733",
    appId: "1:262963863733:web:2575a3afc9c3c319f2defc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)