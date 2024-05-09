// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVsgIFT5pjC-1vqPa12sldwtG2Ud6unEQ",
  authDomain: "ivan-test-project-e8167.firebaseapp.com",
  projectId: "ivan-test-project-e8167",
  storageBucket: "ivan-test-project-e8167.appspot.com",
  messagingSenderId: "826787261935",
  appId: "1:826787261935:web:42abc4d0929e9ccbfdda1a",
  measurementId: "G-CRQ0ZVJMB0"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

export { db, auth, functions };