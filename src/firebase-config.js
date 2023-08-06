// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2aPw-f0vSNk5tETR1Byq0tTL5Bxd1xE",
  authDomain: "blog-6a246.firebaseapp.com",
  projectId: "blog-6a246",
  storageBucket: "blog-6a246.appspot.com",
  messagingSenderId: "996610538318",
  appId: "1:996610538318:web:d769851622c1523dc4bc1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth =getAuth(app);
export const provider=new GoogleAuthProvider();


