// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUsh5cJnwMkDMzr8-s1y26g0T_A78SWaI",
  authDomain: "board-2ad27.firebaseapp.com",
  projectId: "board-2ad27",
  storageBucket: "board-2ad27.appspot.com",
  messagingSenderId: "577855330690",
  appId: "1:577855330690:web:24f260fa6d345ebd43579b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
