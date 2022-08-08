// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from  'firebase/firestore/lite'
// import  { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKoMPKeorS_1zvUR-jgLR_yDxk_tynMQ",
  authDomain: "myjournalapp-a30e2.firebaseapp.com",
  projectId: "myjournalapp-a30e2",
  storageBucket: "myjournalapp-a30e2.appspot.com",
  messagingSenderId: "804653043139",
  appId: "1:804653043139:web:ee7aa29dd8439f97480176",
  measurementId: "G-R5Z1609VP5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
// const analytics = getAnalytics(app);