import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtYNKeqGsBzvw-YeqQ2DoLvUofeJkxli4",
  authDomain: "hoarder-app.firebaseapp.com",
  projectId: "hoarder-app",
  storageBucket: "hoarder-app.appspot.com",
  messagingSenderId: "1047371365745",
  appId: "1:1047371365745:web:74284402bb2709702e0ad0",
}

const app = initializeApp(firebaseConfig)
export const store = getFirestore(app)
export const auth = getAuth(app)
