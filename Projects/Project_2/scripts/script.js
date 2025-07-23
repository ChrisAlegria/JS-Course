
function adivinarNumeroAleatorio(){
    const valorUsuaurio = document.getElementById('numeroEntrada').value;
    const numeroAleatorio = Math.trunc(Math.random()*100);

    if(valorUsuaurio == Math.trunc(numeroAleatorio)){
        console.log(`Has acertado, el numero es ${numeroAleatorio}`);
    } else {
        console.log(`Has fallado, el numero es ${numeroAleatorio}`);
    }
}