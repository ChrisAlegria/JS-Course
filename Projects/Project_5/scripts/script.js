import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCRUaLNVg-tE8rgFomfxWF2JVdByRcSS4",
    authDomain: "proyecto---formulario-js-52c33.firebaseapp.com",
    projectId: "proyecto---formulario-js-52c33",
    storageBucket: "proyecto---formulario-js-52c33.firebasestorage.app",
    messagingSenderId: "38906877185",
    appId: "1:38906877185:web:972b07f10d45b270c67700",
    measurementId: "G-WV1XMTGRVN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    //*Validar campo de nombre
    let campoNombre = document.getElementById('name').value;
    let errorNombre = document.getElementById('nameError');
    if(!campoNombre){
        errorNombre.textContent = 'Por favor ingresa un nombre.';   
    }else if(campoNombre.length <= 3){
        errorNombre.textContent = 'Por favor ingresa un nombre valido.';
    }else{
        errorNombre.textContent = '';
    }

    //*Validar campo de correo
    let campoCorreo = document.getElementById('email').value;
    let errorCorreo = document.getElementById('emailError');
    let correoPatern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!correoPatern.test(campoCorreo)){
        errorCorreo.textContent = 'Por favor ingresa un correo valido.';   
    }else{
        errorCorreo.textContent = '';
    }

    //*Validar campo de contraseña
    let campoContrasena = document.getElementById('password').value;
    let errorContrasena = document.getElementById('passwordError');
    let contrasenaPatern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if(!campoContrasena){
        errorContrasena.textContent = 'Por favor ingresa una contraseña.'; 
    }else if(campoContrasena.length < 8 || campoContrasena.length > 15){
        errorContrasena.textContent = 'La contraseña debe ser mayor a 8 caracteres y menor a 16 caracteres.';
    }else if(!contrasenaPatern.test(campoContrasena)){
        errorContrasena.textContent = 'La contraseña debe de contener al menos una letra mayúscula, una letra minucula, un dígito, no espacios en blanco y un caracter especial.'
    }else{
        errorContrasena.textContent = '';      
    }

    //*Envio de formulario si todos los campos son validos
    if(campoNombre && correoPatern.test(campoCorreo) && contrasenaPatern.test(campoContrasena)){
        alert('Se envio el formulario correctamente.');
        envioInformacionFirebase(campoNombre, campoCorreo, campoContrasena)
    }

    //*Funcion de envio de los datos a Firebase
    async function envioInformacionFirebase(nombre, correo, contrasena,){
        db.collection("users").add({
            nombre: nombre,
            email: correo,
            password: contrasena
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
})

