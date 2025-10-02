// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your web app Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDQovhwcf4sd7qqZIgVApst2rTTeenRchs",
  authDomain: "kondaas-app.firebaseapp.com",
  projectId: "kondaas-app",
  storageBucket: "kondaas-app.firebasestorage.app",
  messagingSenderId: "875669428163",
  appId: "1:875669428163:web:8004a9dc1918d8bcc70f76",
  measurementId: "G-N0ZKWEXFTL",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Auth (we’ll use this for OTP)
export const auth = getAuth(app);
