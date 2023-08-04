// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEdObky7qFRM9UHG3XZ3QtwAXcUXxmQwc",
  authDomain: "blog-project-15684.firebaseapp.com",
  projectId: "blog-project-15684",
  storageBucket: "blog-project-15684.appspot.com",
  messagingSenderId: "659435281366",
  appId: "1:659435281366:web:9c88712a4adddcace82277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth =getAuth(app);
export const provider=new GoogleAuthProvider();