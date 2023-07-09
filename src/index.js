import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2HmBDTmH3G3wHNoN26ybishE6rAxhYUU",
  authDomain: "cart-19d74.firebaseapp.com",
  projectId: "cart-19d74",
  storageBucket: "cart-19d74.appspot.com",
  messagingSenderId: "32238566545",
  appId: "1:32238566545:web:f4b616e63902478fda1330"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export { auth, db };