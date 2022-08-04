import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCjDZZN9VGk2X3YOVzvv8VS-t9vyL3RrZA',
  authDomain: 'react-portfolio-dashboar-2ba91.firebaseapp.com',
  projectId: 'react-portfolio-dashboar-2ba91',
  storageBucket: 'react-portfolio-dashboar-2ba91.appspot.com',
  messagingSenderId: '997725133857',
  appId: '1:997725133857:web:a6ef41cad34df0ee019760',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
