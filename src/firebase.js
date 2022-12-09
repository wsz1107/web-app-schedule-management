// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgmaMHJs42NBJoaH1ek_OSLNreRASC-k0",
  authDomain: "schedule-management-4c841.firebaseapp.com",
  projectId: "schedule-management-4c841",
  storageBucket: "schedule-management-4c841.appspot.com",
  messagingSenderId: "288820929217",
  appId: "1:288820929217:web:091a8b4af8da1431076a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);