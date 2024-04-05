// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoU31sYhYhSbchB-4K6xwdsQy-Y4I0W84",
  authDomain: "netflix-gpt-a3346.firebaseapp.com",
  projectId: "netflix-gpt-a3346",
  storageBucket: "netflix-gpt-a3346.appspot.com",
  messagingSenderId: "687512225601",
  appId: "1:687512225601:web:3cbbc0ca2e6e7b4c1f83c0",
  measurementId: "G-RVZQMRZ1HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// signup/sinin login
export const auth = getAuth();