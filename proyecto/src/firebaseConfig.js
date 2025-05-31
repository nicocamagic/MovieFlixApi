import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA1tp9-si4sYGq5jmk2Elyxo1FzEazzMDI",
  authDomain: "movieflix-4779f.firebaseapp.com",
  projectId: "movieflix-4779f",
  storageBucket: "movieflix-4779f.firebasestorage.app",
  messagingSenderId: "88009749606",
  appId: "1:88009749606:web:cfbd35246cf1edeb4d69a7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };