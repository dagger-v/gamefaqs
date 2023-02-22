import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBErUBqc3OXAma3lP1JXddyJFbR5DoDd3U",
  authDomain: "gamefaqs-33134.firebaseapp.com",
  projectId: "gamefaqs-33134",
  storageBucket: "gamefaqs-33134.appspot.com",
  messagingSenderId: "331559825157",
  appId: "1:331559825157:web:50c88713f8f1b83302516c",
  measurementId: "G-W21TFLN352",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
