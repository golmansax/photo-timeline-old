import Firebase from 'firebase';
import { FIREBASE_URL } from './config';

const firebaseRef = new Firebase(FIREBASE_URL);

export const getAuth = () => firebaseRef.getAuth();
export const isLoggedIn = () => !!getAuth();
export const logOut = () => firebaseRef.unauth();
export function authWithPassword(...args) {
  firebaseRef.authWithPassword(...args);
}

export const childRef = (key) => firebaseRef.child(key);
