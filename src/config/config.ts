import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDVkhHefAtJePpHJOwnVGvJH_ArZnbI-ic",
  authDomain: "airbnb-99fa8.firebaseapp.com",
  projectId: "airbnb-99fa8",
  storageBucket: "airbnb-99fa8.appspot.com",
  messagingSenderId: "347431923630",
  appId: "1:347431923630:web:101ebf3a5c05165f8ba23f",
  measurementId: "G-4786634X2Z"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { db, app, auth, provider }

