// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCgg47WmVJII3FGG3hoQQjcmlRLeVNPh8g",
  authDomain: "the-bright-future-bd.firebaseapp.com",
  projectId: "the-bright-future-bd",
  storageBucket: "the-bright-future-bd.appspot.com",
  messagingSenderId: "263923800534",
  appId: "1:263923800534:web:7f0c44706edcf3922d2c77",
  measurementId: "G-GZ9KMMPN06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;