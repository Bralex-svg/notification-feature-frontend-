importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyC8qRC07cy8UekOVpUG3e9GlYS7SWY-YQk",
  authDomain: "notification-demo-2b0ca.firebaseapp.com",
  projectId: "notification-demo-2b0ca",
  storageBucket: "notification-demo-2b0ca.appspot.com",
  messagingSenderId: "98976512962",
  appId: "1:98976512962:web:c9c2a2b5447a987e41b45b",
});

const messaging = firebase.messaging();
