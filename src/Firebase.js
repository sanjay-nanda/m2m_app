import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDt5hOKY5sesEjQoV3vYMq4wx6eELALB9U",
    authDomain: "iot-system-arch.firebaseapp.com",
    databaseURL: "https://iot-system-arch.firebaseio.com",
    projectId: "iot-system-arch",
    storageBucket: "iot-system-arch.appspot.com",
    messagingSenderId: "417542688116",
    appId: "1:417542688116:web:9b416a4d14e4b79b68b021"
};

firebase.initializeApp(firebaseConfig);

export default firebase;