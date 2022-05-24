import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRM2YWIpgZPtLHy8XNSIAsahLm3Qzpozk",
    authDomain: "fabrica-de-empanadas.firebaseapp.com",
    projectId: "fabrica-de-empanadas",
    storageBucket: "fabrica-de-empanadas.appspot.com",
    messagingSenderId: "475290125970",
    appId: "1:475290125970:web:041d6e40ee36bb5c1e884b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);