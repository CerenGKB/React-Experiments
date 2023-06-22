import { initializeApp } from "firebase/app"
import {getFirestore,collection} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOWPAnNB1C8isYW1yK83mEbvNPT2FZZ90",
  authDomain: "react-notes-3db26.firebaseapp.com",
  projectId: "react-notes-3db26",
  storageBucket: "react-notes-3db26.appspot.com",
  messagingSenderId: "44936036346",
  appId: "1:44936036346:web:40268b9337872771abee43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db,"notes")