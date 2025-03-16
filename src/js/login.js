 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBt61pcHhekWIm_oFHpoV6NwyhSnpv31WE",
   authDomain: "studymate-840b9.firebaseapp.com",
   projectId: "studymate-840b9",
   storageBucket: "studymate-840b9.firebasestorage.app",
   messagingSenderId: "834548842182",
   appId: "1:834548842182:web:b51789d325b15c4466a1c7"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


const submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('Loggin In....');
        window.location.href = '../pages/dashboard.html';
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
});

