import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js'
import { getFirestore, collection} from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js'
import * as firebaseFirestore from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwIGc1URR7cUMjo1JzS922IYT9JRffLV0",
    authDomain: "portafolio-bc493.firebaseapp.com",
    projectId: "portafolio-bc493",
    storageBucket: "portafolio-bc493.appspot.com",
    messagingSenderId: "171644982633",
    appId: "1:171644982633:web:983e7904a54735a6f899f8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Listen for form submit
const form = document.getElementById('my-form');

form.addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get form values
    const name = getInputVal('nameInput');
    const email = getInputVal('enameInput');
    const subject = getInputVal('subjectInput');
    const message = getInputVal('messageInput');



    // Save message
    saveMessage(name, email, subject, message);


    // Clear form
    document.getElementById('my-form').reset();
}

// Function to get form value
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(name, email, subject, message) {
    firebaseFirestore
      .addDoc(firebaseFirestore.collection(db, 'ContactFormData'), {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  }
