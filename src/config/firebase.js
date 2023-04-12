import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwA9zgmAZ5cm4fjIdVgPchBddKoESbSp4",
  authDomain: "test-metec-3.firebaseapp.com",
  projectId: "test-metec-3",
  storageBucket: "test-metec-3.appspot.com",
  messagingSenderId: "405205686796",
  appId: "1:405205686796:web:edaf30172ef4c0e3bfec29",
  measurementId: "G-4Y6LJJB9SS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);