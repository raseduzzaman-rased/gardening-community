// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAot1I30UMMWwVrQRqrHEy2CoRdn8NgVn0",
  authDomain: "gardening-hub-5e818.firebaseapp.com",
  projectId: "gardening-hub-5e818",
  storageBucket: "gardening-hub-5e818.firebasestorage.app",
  messagingSenderId: "402576791821",
  appId: "1:402576791821:web:124df8e3e213c569763844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);