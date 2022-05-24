import firebase from "./firebase/app";
import "./firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCYHp2aHiw-RQLhvHkcwGFOrvtjlDlGYTk",
  authDomain: "vue-blog-system-f8942.firebaseapp.com",
  projectId: "vue-blog-system-f8942",
  storageBucket: "vue-blog-system-f8942.appspot.com",
  messagingSenderId: "80290074227",
  appId: "1:80290074227:web:14c592089496e4517fa406",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
