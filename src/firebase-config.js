import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC8qRC07cy8UekOVpUG3e9GlYS7SWY-YQk",
  authDomain: "notification-demo-2b0ca.firebaseapp.com",
  projectId: "notification-demo-2b0ca",
  storageBucket: "notification-demo-2b0ca.appspot.com",
  messagingSenderId: "98976512962",
  appId: "1:98976512962:web:c9c2a2b5447a987e41b45b",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  "BFSDLyfdkNFS4w428wqH9lYqIPruIu9VQoyUosTeD7ihZlU4iAG-59sJhrV3rcTwKPyyTXvmTeW9tI-YU1Hwjg4"
);

export { messaging };
