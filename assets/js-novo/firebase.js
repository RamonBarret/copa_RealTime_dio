// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvzW7gXz8A0kVKc3UnPbKx0pgzIhPh7jI",
  authDomain: "realtime-copa-2022-14a2a.firebaseapp.com",
  projectId: "realtime-copa-2022-14a2a",
  storageBucket: "realtime-copa-2022-14a2a.appspot.com",
  messagingSenderId: "757560980904",
  appId: "1:757560980904:web:5e1011ebcbf9f25a26999d",
  measurementId: "G-KV684XNXQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app