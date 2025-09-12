document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    //*Validar campo de nombre
    let campoNombre = document.getElementById('name').value;
    let errorNombre = document.getElementById('nameError');

    if(!campoNombre){
        errorNombre.textContent = 'Por favor ingresa un nombre.'   
    }else{
        errorNombre.textContent = ''           
    }

    //*Validar campo de correo
    let campoCorreo = document.getElementById('email').value;
    let errorCorreo = document.getElementById('emailError');
    let paterValidacion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!campoCorreo || paterValidacion.test(campoCorreo)){
        errorCorreo.textContent = 'Por favor ingresa un correo valido.'   
    }else{
        errorCorreo.textContent = ''           
    }

    //*Validar campo de contraseña
    let campoContraseña = document.getElementById('password').value;
    let errorContraseña = document.getElementById('passwordError');

    if(!campoContraseña){
        errorContraseña.textContent = 'Por favor ingresa un nombre.'   
    }else{
        errorContraseña.textContent = ''           
    }
});