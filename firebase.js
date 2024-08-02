// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfWWgUKGM0FsPT4pOI5Nq2bg4nd-qX204",
  authDomain: "inventory-ed0c1.firebaseapp.com",
  projectId: "inventory-ed0c1",
  storageBucket: "inventory-ed0c1.appspot.com",
  messagingSenderId: "383384542363",
  appId: "1:383384542363:web:e7eda36098e6b996bcba3e",
  measurementId: "G-ZZ5EYMMYHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export {firestore}