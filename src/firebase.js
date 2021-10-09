import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyCFFKXMCNQa2bURzD8B0TqR2-bXEHzcASE",
    authDomain: "facebook-clone-2d879.firebaseapp.com",
    projectId: "facebook-clone-2d879",
    storageBucket: "facebook-clone-2d879.appspot.com",
    messagingSenderId: "170739845538",
    appId: "1:170739845538:web:4707874c174d47255ccafb"
  });

  const auth = firebase.auth();
  const Provider = new firebase.auth.FacebookAuthProvider();

  const db = firebaseConfig.firestore();

  const storage = firebase.storage();

  export {auth, Provider,db, storage}

