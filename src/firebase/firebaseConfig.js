import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdwFCTj805WEbVv7_lirlHrOFUz7CUn7A",
  authDomain: "react-blog-app-10a3e.firebaseapp.com",
  databaseURL: "https://react-blog-app-10a3e-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-10a3e",
  storageBucket: "react-blog-app-10a3e.appspot.com",
  messagingSenderId: "105966901538",
  appId: "1:105966901538:web:a28ad840019737c0faad7b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
