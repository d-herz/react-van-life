// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  query,
  where
} from "firebase/firestore/lite";

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
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  // console.log(dataArr)
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)

  // console.log(vanSnapshot)
  return ({
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  })
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  // console.log(dataArr)
  return dataArr
}