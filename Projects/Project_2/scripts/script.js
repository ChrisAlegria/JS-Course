// *Se declara la variable que almacenara el numero al azar.
const numeroAleatorio = Math.floor(Math.random()*100)+1;
console.log(numeroAleatorio)

// *Esta funcion se ejecutara cuando el usuario haga click en el btn.
function adivinarNumeroAleatorio(){
    const valorUsuaurio = document.getElementById('numeroEntrada').value;
    if(valorUsuaurio == Math.trunc(numeroAleatorio)){
        alert(`Has acertado, el numero es ${numeroAleatorio}`);
    } else if(valorUsuaurio > numeroAleatorio){
        alert(`Te has pasado, es un menor`);
    } else {
        alert(`Aun estas por debajo del numero`)
    }
}