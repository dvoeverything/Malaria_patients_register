// Import the functions you need from the SDKs you 
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"",//add from firebase
  authDomain: "",//from firebase
  projectId: "malaria-patient-register",
  storageBucket: "malaria-patient-register.appspot.com",
  messagingSenderId: "190350713123",
  appId: "",
  measurementId: "G-0HECTYZXK3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);

export {auth , db  }
