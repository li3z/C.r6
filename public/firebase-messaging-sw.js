importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
var config = {
  apiKey: "AIzaSyACaL6qsfIAgQ1QUCWhPmyn76D1UL54VmA",
  authDomain: "push-test-de5c2.firebaseapp.com",
  databaseURL: "https://push-test-de5c2.firebaseio.com",
  projectId: "push-test-de5c2",
  storageBucket: "push-test-de5c2.appspot.com",
  messagingSenderId: "824440442769"
};


firebase.initializeApp(config);

const messaging = firebase.messaging();