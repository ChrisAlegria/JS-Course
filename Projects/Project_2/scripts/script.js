// *Se declara la variable que almacenara el numero al azar.
let numeroAleatorio = Math.floor(Math.random()*100)+1;
console.log(numeroAleatorio);

let contadorIntentos = 0;

intentos.textContent = `Llevas un total de ${contadorIntentos} intentos.`;

// *Esta funcion se ejecutara cuando el usuario haga click en el btn.
function adivinarNumeroAleatorio(){
    const valorUsuaurio = document.getElementById('numeroEntrada').value;
    if(valorUsuaurio >= 1 && valorUsuaurio <=100 ){
        contadorIntentos++; 
        intentos.textContent = `Llevas un total de ${contadorIntentos} intentos.`;

        if(valorUsuaurio == Math.trunc(numeroAleatorio)){
            mensaje.textContent =`¡Felicitaciones!, ¡has adivinado el numero, el cual es: ${numeroAleatorio}.!`;
            mensaje.style = "color: greenyellow";
            numeroEntrada.disabled = true;

        } else if(valorUsuaurio > numeroAleatorio){
            mensaje.textContent = `¡Te has pasado!, es un numero menor.`;
            mensaje.style = "color: red";

        } else {
            mensaje.textContent =`¡Mas alto!, es un numero mayor.`;
            mensaje.style = "color: blue";
        }

    } else{
        alert('Introduce un numero valido entre el 1 y el 100.');
        document.getElementById('numeroEntrada').value = ''
    }
}
