// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDvqVSLotiNvd-j_D30h4xst3FIzv3jbxg",
  authDomain: "vanlife-b8e8c.firebaseapp.com",
  projectId: "vanlife-b8e8c",
  storageBucket: "vanlife-b8e8c.appspot.com",
  messagingSenderId: "537500670974",
  appId: "1:537500670974:web:0eaf07e5765e84e4eabeaf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getAllVans() {

}

export async function getVan(id) {

}

export async function getHostVans() {

}