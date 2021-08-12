import * as firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyBDxKEEW3vkLhDUBvxd9NQhyBm0UGD266U",
    authDomain: "earplugs-ecommerce.firebaseapp.com",
    projectId: "earplugs-ecommerce",
    storageBucket: "earplugs-ecommerce.appspot.com",
    messagingSenderId: "697962066652",
    appId: "1:697962066652:web:77cbb08dfe50ce91b77a19",
    measurementId: "G-MJQK32MPTB"
  };


const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
    return app
    
}

export function getFirestore() {
    return firebase.firestore(app)
}