import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyAMxrxi8lyNoFQp9Xa0oHDDIfSApCjLxTs",
    authDomain: "m-city-84f99.firebaseapp.com",
    databaseURL: "https://m-city-84f99.firebaseio.com",
    projectId: "m-city-84f99",
    storageBucket: "m-city-84f99.appspot.com",
    messagingSenderId: "93959713345",
    appId: "1:93959713345:web:4c2eaa14d921821048ccc0",
    measurementId: "G-NLFKFMG4V5"
};


firebase.initializeApp(firebaseConfig)

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')
const firebaseTeams = firebaseDB.ref('teams')
const firebasePlayers = firebaseDB.ref('players')

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB,
}