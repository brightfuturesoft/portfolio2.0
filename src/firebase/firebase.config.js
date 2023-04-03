// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDruTVM_uQ8HboU_xeD2cUO5Owo-oefjYs",
  authDomain: "bright-future-16f5f.firebaseapp.com",
  projectId: "bright-future-16f5f",
  storageBucket: "bright-future-16f5f.appspot.com",
  messagingSenderId: "698978904131",
  appId: "1:698978904131:web:672204a0268c1749fdccf6",
  measurementId: "G-QB1Z6JX89K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app