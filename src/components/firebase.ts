// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBUovqqtVpq1GYDfymPeqcmpPdhFR7SqHg",
    authDomain: "myfirst-todo-35fdd.firebaseapp.com",
    projectId: "myfirst-todo-35fdd",
    storageBucket: "myfirst-todo-35fdd.appspot.com",
    messagingSenderId: "164049242968",
    appId: "1:164049242968:web:3a9d8ba35b21e58887332d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
