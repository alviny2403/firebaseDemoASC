import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase, // to get database from firebase
  ref,  // give specific reference in out database
  push, // create new location in given reference
  set,  // adds data to our database
  onValue,  // reads data from our database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
// ENTER FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyDV5bTieMqx_iUawGGlkGoci1odn_2d9cg",
  authDomain: "fir-demo-28e08.firebaseapp.com",
  projectId: "fir-demo-28e08",
  storageBucket: "fir-demo-28e08.appspot.com",
  messagingSenderId: "522655058063",
  appId: "1:522655058063:web:c8b105f782d535a3ed48fa",
  measurementId: "G-8NHY15X2RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
