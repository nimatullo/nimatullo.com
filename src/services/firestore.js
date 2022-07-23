// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getLinks() {
  const querySnapshot = await getDocs(collection(db, "links"));
  return querySnapshot.docs.map((doc) => doc.data());
}

export async function addLink(url, title) {
  try {
    const docRef = await addDoc(collection(db, "links"), {
      url,
      title,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
