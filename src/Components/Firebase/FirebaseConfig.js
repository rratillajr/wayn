import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCi-YYV4iD8BO4cjJXT1DR2aSfNgCAAFSA",
  authDomain: "wayn-7a033.firebaseapp.com",
  databaseURL: "https://wayn-7a033.firebaseio.com",
  projectId: "wayn-7a033",
  storageBucket: "wayn-7a033.appspot.com",
  messagingSenderId: "549087159332",
  appId: "1:549087159332:web:5fcba8066b8096e411a4b1",
  measurementId: "G-F9YEZ8ES96"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
