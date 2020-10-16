import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBygiHa2bf4GKG-8MHptlK2OzA3tj6JBCQ",
    authDomain: "twitter-clone-a4693.firebaseapp.com",
    databaseURL: "https://twitter-clone-a4693.firebaseio.com",
    projectId: "twitter-clone-a4693",
    storageBucket: "twitter-clone-a4693.appspot.com",
    messagingSenderId: "529575391455",
    appId: "1:529575391455:web:87cc861534460183caf96a",
    measurementId: "G-HGFP2LDXP9",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;