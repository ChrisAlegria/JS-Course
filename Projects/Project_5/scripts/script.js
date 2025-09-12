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

    if(paterValidacion.test(campoCorreo)){
        errorCorreo.textContent = '';
    }else{
        errorCorreo.textContent = 'Por favor ingresa un correo valido.';   
    }

    //*Validar campo de contraseña
    let campoContraseña = document.getElementById('password').value;
    let errorContraseña = document.getElementById('passwordError');

    if(!campoContraseña){
        errorContraseña.textContent = 'Por favor ingresa una contraseña.'; 
    }else{
        errorContraseña.textContent = '';      
    }

    //*Validar todo
    if(campoNombre && paterValidacion.test(campoCorreo) && campoContraseña){
        console.log('Se envio el formulario correctamente.');
    }else{
        alert('Hubo un error al enviar el formulario.')
    }
});