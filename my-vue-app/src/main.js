// FILE: main.js

import { createApp } from "vue";
import { Quasar ,Dialog} from "quasar";
import { router } from "../src/routes";
import "./index.css";
import { createPinia } from "pinia";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";

// firebase
import * as firebaseAuth from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { deleteDoc, setDoc, addDoc, doc } from "firebase/firestore";
import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD_MkGSno-GaJX-ZLBLdKaW613ks3ris8U",
  authDomain: "appgame-c0f5a.firebaseapp.com",
  projectId: "appgame-c0f5a",
  storageBucket: "appgame-c0f5a.appspot.com",
  messagingSenderId: "335584399999",
  appId: "1:335584399999:web:ddd3fbe89b0c151a58a54a",
  measurementId: "G-R95E97FY8J",
};

const app = initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
// const auth = firebase.auth();

//------------------------- Credentail ----------------------------------------------

const LoginWithFirebase = async (email, password) => {
  try {
    const provider = await firebaseAuth.signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return provider;
  } catch (e) {
    alert(e);
  }
};

const RegistWithFirebase = async (email, password, name) => {
  try {
    const provider = await firebaseAuth.createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const displayName = await firebaseAuth.updateProfile(provider.user, {
      displayName: name,
    });
    return provider;
  } catch (e) {
    throw new Error(e);
  }
};

const createPaymentRequest = async (payload) => {
  await addDoc(collection(db, "Admin"), { payload });
};

const createNotification = async (payload) => {
  await addDoc(collection(db, "notifications"), { payload });
};

const fetchPrice = async () =>{
  const data = collection(db, "price");
  const newsList = await getDocs(data);
  const priceRequest = newsList.docs.map((doc) => doc.data());
  const id = newsList.docs.map((doc) => doc.id);
  priceRequest.forEach((data, i) => (data.id = id[i]));
  return { priceRequest };
 
}

const createSetPrice = async (payload) => {
  await addDoc(collection(db, "price"), { payload });
};

const deletePaymentRequest = async (id) => {
  await deleteDoc(doc(db, "Admin", id));
};

const deleteSetProce = async (id) => {
  await deleteDoc(doc(db, "price", id));
};

const fetchPaymentRequestData = async () => {
  const data = collection(db, "Admin");
  const newsList = await getDocs(data);
  const paymentRequest = newsList.docs.map((doc) => doc.data());
  const id = newsList.docs.map((doc) => doc.id);
  paymentRequest.forEach((data, i) => (data.id = id[i]));
  return { paymentRequest };
};

const fetchNotification = async () => {
  const data = collection(db, "notifications");
  const newsList = await getDocs(data);
  const request = newsList.docs.map((doc) => doc.data());
  return { request };
};

export { auth, LoginWithFirebase, RegistWithFirebase,deleteSetProce ,createSetPrice, createPaymentRequest 
  ,fetchPaymentRequestData,createNotification,fetchNotification ,deletePaymentRequest , fetchPrice};

// pinia----------------------------
const pinia = createPinia();
const myApp = createApp(App);
myApp.use(pinia);
myApp.use(router);


myApp.use(Quasar, {
  plugins: {Dialog}, // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
