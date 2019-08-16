import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyAKSgXKICj0ly7cH9KksFN3BDHV_aogtR0',
  authDomain: 'who-walked-the-dog.firebaseapp.com',
  databaseURL: 'https://who-walked-the-dog.firebaseio.com',
  projectId: 'who-walked-the-dog',
  storageBucket: 'who-walked-the-dog.appspot.com',
  messagingSenderId: '974536251787',
  appId: '1:974536251787:web:60881806a61bf445'
}

firebase.initializeApp(config)
