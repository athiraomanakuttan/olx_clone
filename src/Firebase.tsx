import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBZEWpasMZ2bgku4CS9s1w1EkZQD7nczPM",
  authDomain: "olx-clone-eee08.firebaseapp.com",
  projectId: "olx-clone-eee08",
  storageBucket: "olx-clone-eee08.appspot.com",
  messagingSenderId: "524924641374",
  appId: "1:524924641374:web:4f25dd9cfde914ef58d4cf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

 