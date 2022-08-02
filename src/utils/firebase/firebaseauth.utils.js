import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import "./firebase.utils.js";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const storage = getStorage();

export const createUserFromAuth = async (authUser, additionalInfo = {}) => {
  if (!authUser) return;

  const userRef = doc(db, "users", authUser.uid);

  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalInfo,
      });
    } catch (error) {
      console.error("error creating data!", error);
    }
  }

  return userRef;
};

export const createUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await auth.signOut();
};

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
