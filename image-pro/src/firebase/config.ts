import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZwMy2o_o6k2oX4ip7ure78YARVPygWQg",
  authDomain: "image-gallery-197d4.firebaseapp.com",
  projectId: "image-gallery-197d4",
  storageBucket: "image-gallery-197d4.appspot.com",
  messagingSenderId: "990551323339",
  appId: "1:990551323339:web:c77568a45916124aa3a14e",
  measurementId: "G-0G472X112X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };