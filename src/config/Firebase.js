/**
 * @Author: Your name
 * @Date:   2023-11-10 19:59:42
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-11-11 12:07:10
 */
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
 import { getAuth, GoogleAuthProvider } from "firebase/auth" 


const firebaseConfig = {
    apiKey: "AIzaSyBrgekVcZwleSGuGl8DheV5DpokDXkaL4o",
    authDomain: "tp-final-8c32e.firebaseapp.com",
    projectId: "tp-final-8c32e",
    storageBucket: "tp-final-8c32e.appspot.com",
    messagingSenderId: "772311362040",
    appId: "1:772311362040:web:ac88e16fb7f32e7a708e0d"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

 export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider() 
