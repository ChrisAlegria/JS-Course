// *Se declara la variable que almacenara el numero al azar.
const numeroAleatorio = Math.floor(Math.random()*100)+1;
console.log(numeroAleatorio)

// *Esta funcion se ejecutara cuando el usuario haga click en el btn.
function adivinarNumeroAleatorio(){
    const valorUsuaurio = document.getElementById('numeroEntrada').value;
    if(valorUsuaurio >= 1 && valorUsuaurio <=100 ){
        if(valorUsuaurio == Math.trunc(numeroAleatorio)){
        mensaje.textContent =`Has acertado, el numero es ${numeroAleatorio}`;
        } else if(valorUsuaurio > numeroAleatorio){
            mensaje.textContent = `Te has pasado, es un menor`;
        } else {
            mensaje.textContent =`Aun estas por debajo del numero`;
        }
    } else{
        alert('Debes de escribir un valor valido entre el 1 y el 100');
        document.getElementById('numeroEntrada').value = ''
    }
}