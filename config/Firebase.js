import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyAtlunABR6Ra7tU30lqBKeVk0NgdrHtb1M",
  authDomain: "bajajassignment.firebaseapp.com",
  projectId: "bajajassignment",
  storageBucket: "bajajassignment.appspot.com",
  messagingSenderId: "844009986175",
  appId: "1:844009986175:web:636656596018409f39874a"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };