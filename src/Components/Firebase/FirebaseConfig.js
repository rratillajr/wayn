import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDbeuWmZ8KEr016vuR0uHUlwROPnhVWYSc",
  authDomain: "ti-tids-demo.firebaseapp.com",
  databaseURL: "https://ti-tids-demo.firebaseio.com",
  projectId: "ti-tids-demo",
  storageBucket: "ti-tids-demo.appspot.com",
  messagingSenderId: "92954047239",
  appId: "1:92954047239:web:b8f73fd068f41f2bc04ba2"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
