// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYLGA6tEy9UclNx9hWMbDug1k7XpntsOo",
  authDomain: "akhand-computer-parts.firebaseapp.com",
  projectId: "akhand-computer-parts",
  storageBucket: "akhand-computer-parts.appspot.com",
  messagingSenderId: "830602783148",
  appId: "1:830602783148:web:b678ff29d1bbc221cc7209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;