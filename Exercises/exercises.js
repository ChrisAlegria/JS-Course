// *Calcular precio de ropa mas el iva
const costo = 200;
const iva = 21;
const resultado = 200+((costo/100)*21);
console.log(`El total a pagar del elemento con su iva es de: $${resultado}`)

// *Calcular area y perimeto de cuadrado
const ladoCuadrado = 40;
const area = 40*40;
const perimetro = 40*4;
console.log(`El area de un cuadrado donde uno de sus lados es de 40m es de ${area}m y su perimetro es de ${perimetro}m`)

// *Saludar a usuario cuando ingrese su nombre en input y precione boton
function saludo(){
    const nombreUsuario = document.getElementById('nombreUsuarioSaludo').value;
    alert(`Hola ${nombreUsuario}`)
}

// *Sacar la media de 3 numeros dados por el usuario
function mediaNumeros(){
    const numeroDado1 = document.getElementById('numeroDadoUsuario1').value;
    const numeroDado2 = document.getElementById('numeroDadoUsuario2').value;
    const numeroDado3 = document.getElementById('numeroDadoUsuario3').value;
    const operacion3NumerosDados = `(${numeroDado1}+${numeroDado2}+${numeroDado3})/3`
    const resultado = eval(operacion3NumerosDados);
    alert(`La media de tus 3 numeros es: ${resultado}`)
}