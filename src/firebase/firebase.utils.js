import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_wSMMXlqBlZjMpiMTLNvxgixlQpg5uvY",
    authDomain: "e-commerce-711c2.firebaseapp.com",
    projectId: "e-commerce-711c2",
    storageBucket: "e-commerce-711c2.firebasestorage.app",
    messagingSenderId: "291458484981",
    appId: "1:291458484981:web:6a824951b1e403b7e0d3bc",
    measurementId: "G-ELNPJ04ZX8"
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithRedirect(auth, provider);
export const handleRedirectResult = () => getRedirectResult(auth);

export default app;
