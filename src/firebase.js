import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";

import 'firebase/compat/firestore'
const app = firebase.initializeApp({
   
    apiKey: "AIzaSyDzpvu0zJyYueC8QReSSfN-5e7p6-jG8EY",
    authDomain: "goalsetter-750c9.firebaseapp.com",
    projectId: "goalsetter-750c9",
    storageBucket: "goalsetter-750c9.appspot.com",
    messagingSenderId: "846949608256",
    appId: "1:846949608256:web:ed083ef620903db52068a5"

})

export const auth = app.auth()

export const db =getDatabase(app)

export const storage = getStorage(app)


 

export default app