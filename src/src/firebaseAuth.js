// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// /import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6IxOIQ-pFxP7Mlz5RDqt0iRvjwNJDLDA",
  authDomain: "my-first-app-79297.firebaseapp.com",
  projectId: "my-first-app-79297",
  storageBucket: "my-first-app-79297.appspot.com",
  messagingSenderId: "1053870561646",
  appId: "1:1053870561646:web:6c733d6aba568e136e497f",
  measurementId: "G-LPG60RK4BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth();

// const analytics = getAnalytics(app);
// export  {auth};