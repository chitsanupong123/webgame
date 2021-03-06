import * as firebaseAuth from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { deleteDoc, setDoc, addDoc, doc } from "firebase/firestore";
import { getStorage, getDownloadURL, uploadBytes, ref } from "firebase/storage";

// import { createApp } from "vue";
// import { createPinia } from "pinia";
// import App from "src/App.vue";

// const apps = createApp(App);
// const pinia = createPinia();

// apps.use(pinia);

const firebaseConfig = {
    apiKey: "AIzaSyD_MkGSno-GaJX-ZLBLdKaW613ks3ris8U",
    authDomain: "appgame-c0f5a.firebaseapp.com",
    projectId: "appgame-c0f5a",
    storageBucket: "appgame-c0f5a.appspot.com",
    messagingSenderId: "335584399999",
    appId: "1:335584399999:web:ddd3fbe89b0c151a58a54a",
    measurementId: "G-R95E97FY8J"
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

  export{auth , LoginWithFirebase , RegistWithFirebase}