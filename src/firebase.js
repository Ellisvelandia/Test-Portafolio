import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyB-js-kpQKw3UCDgTvOs4ug0zuy5CPbqTk',
  authDomain: 'react--portfolio-dashboard.firebaseapp.com',
  projectId: 'react--portfolio-dashboard',
  storageBucket: 'react--portfolio-dashboard.appspot.com',
  messagingSenderId: '672666038864',
  appId: '1:672666038864:web:7dab01f6a350d954c1d755',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
