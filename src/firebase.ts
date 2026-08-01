import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyB1KSdsG0228aZHEnSVPLgMvtkJ44RtYyk",
  authDomain: "nandu-portfolio-2d790.firebaseapp.com",
  projectId: "nandu-portfolio-2d790",
  storageBucket: "nandu-portfolio-2d790.firebasestorage.app",
  messagingSenderId: "22841472967",
  appId: "1:22841472967:web:b4e47bf279984ceee70be2",
  measurementId: "G-XGXM8RHP12"
};

// Initialize Firebase safely
export const app = initializeApp(firebaseConfig);

// Safe Analytics Initialization to prevent any browser runtime crashes
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  }).catch((err) => {
    console.warn('Firebase Analytics load skipped:', err);
  });
}
