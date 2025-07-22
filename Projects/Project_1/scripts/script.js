// *Esta funcion agrega a la pantalla el valor de el boton de la calculadora que toquemos.
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// *Esta funcion elimina el contenido del input de pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}

// *Esta funcion calcula la operacion y la muestra
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}