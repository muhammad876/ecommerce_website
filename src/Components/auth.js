// Import the functions you need from the SDKs you need


import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, where, query, getDocs} from 'firebase/firestore'

import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWvG13YnBROmcTZ-4gxT3NC9b5pOBaqlA",
  authDomain: "reactwebsite-1bd6b.firebaseapp.com",
  projectId: "reactwebsite-1bd6b",
  storageBucket: "reactwebsite-1bd6b.appspot.com",
  messagingSenderId: "519736048840",
  appId: "1:519736048840:web:ea5125c5ed6ea4d597b9fd",
  measurementId: "G-NV7YLB1FXV"
  // apiKey: "AIzaSyCmnfc6pGzx7j0L_MwNyMececZX0KLyI8Q",
  // authDomain: "ecommerce-24ce0.firebaseapp.com",
  // projectId: "ecommerce-24ce0",
  // storageBucket: "ecommerce-24ce0.appspot.com",
  // messagingSenderId: "295673961955",
  // appId: "1:295673961955:web:66bd37db00d728bd5514d6",
  // measurementId: "G-H2T5RGF2B4"

};

const app =firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = firebase.auth();
export default app;