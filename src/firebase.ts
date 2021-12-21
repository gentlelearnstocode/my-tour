import firebase from 'firebase';
import { toast } from './pages/toast';

const firebaseConfig = {
  apiKey: 'AIzaSyCn8cw4kDwJ-3IXAVTH8u4j3NpS5jsc0uc',
  authDomain: 'tour-app-1b3b7.firebaseapp.com',
  projectId: 'tour-app-1b3b7',
  storageBucket: 'tour-app-1b3b7.appspot.com',
  messagingSenderId: '380002139707',
  appId: '1:380002139707:web:fd86fc4448387fb6c9261e',
};

firebase.initializeApp(firebaseConfig);

export async function loginUser(username: string, password: string) {
  const email = `${username}@email.com`;
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return res;
  } catch (error) {
    toast(error.message, 3000);
    return false;
  }
}

export async function signupUser(username: string, password: string) {
  const email = `${username}@email.com`;
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    toast(error.message, 3000);
    return false;
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsub();
    });
  });
}

export function logoutUser() {
  return firebase.auth().signOut();
}
