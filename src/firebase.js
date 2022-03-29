// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJB3g3PWo1e7zOz1gVR6Yuj5LvAJlxs_Y",
  authDomain: "ppl-site-e39bc.firebaseapp.com",
  databaseURL: "https://ppl-site-e39bc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ppl-site-e39bc",
  storageBucket: "ppl-site-e39bc.appspot.com",
  messagingSenderId: "683111501179",
  appId: "1:683111501179:web:8207e137d91a86da94c1de",
  measurementId: "G-DG31XSKZ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;
