import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpTdmgt1l9oOx_WO5qxeut1mHF46cIbeo",
  authDomain: "hangmanout-81a48.firebaseapp.com",
  projectId: "hangmanout-81a48",
  storageBucket: "hangmanout-81a48.firebasestorage.app",
  messagingSenderId: "108434356737",
  appId: "1:108434356737:web:c7be160969395755405e00",
  measurementId: "G-PS2FKQEGVE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);