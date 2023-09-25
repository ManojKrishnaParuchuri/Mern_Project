// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWn6f89uVM_LDrAicVYM2GzExSMLCFdq8",
  authDomain: "verify-108fe.firebaseapp.com",
  projectId: "verify-108fe",
  storageBucket: "verify-108fe.appspot.com",
  messagingSenderId: "172056130118",
  appId: "1:172056130118:web:b827ab09d1262e42e45047",
  measurementId: "G-FC0D9SZ9SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;