import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBBbBy348uSOEW_8ln9n4L900JjSw8dupk",
    authDomain: "notes-web-app-ead92.firebaseapp.com",
    projectId: "notes-web-app-ead92",
    storageBucket: "notes-web-app-ead92.appspot.com",
    messagingSenderId: "452005813356",
    appId: "1:452005813356:web:736e49de7b58c209ae8c49",
    measurementId: "G-19W3TP93QS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db }