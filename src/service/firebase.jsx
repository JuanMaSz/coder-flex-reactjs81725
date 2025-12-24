// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4B0fJkwQOobSyHCFEcY_WrSdbEtgPB24",
  authDomain: "coder-jsreact.firebaseapp.com",
  projectId: "coder-jsreact",
  storageBucket: "coder-jsreact.firebasestorage.app",
  messagingSenderId: "69240111088",
  appId: "1:69240111088:web:08a478a2dc4c796277a735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)