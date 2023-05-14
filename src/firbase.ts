// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy_w3IvZRI8PY3rZwcBgBFr0YA9N_C2Sk",
  authDomain: "message-app-e8678.firebaseapp.com",
  projectId: "message-app-e8678",
  storageBucket: "message-app-e8678.appspot.com",
  messagingSenderId: "648168482554",
  appId: "1:648168482554:web:35da755ae215109e6a8b43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };
