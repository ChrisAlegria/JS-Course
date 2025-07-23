const numeroAleatorio = Math.trunc(Math.random()*100);
console.log(numeroAleatorio)

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