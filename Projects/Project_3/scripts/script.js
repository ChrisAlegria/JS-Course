// *Importar objetos de ciudades.js
import { barcelona, roma, paris, londres } from "./ciudades.js";

// *Obtener elementos del DOM.
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// *Bucle que agrega funcion listener a cada elemento
enlaces.forEach( 
    function(enlace){
        // *Se especifica a cada elemento que tendran un evento tipo 'click'
        enlace.addEventListener('click', function(){
            // *Eliminaer las clases active
            enlaces.forEach(function(enlace){
                enlace.classList.remove('active');
            })

            // *Agregar clase active al enlace actual
            this.classList.add('active');

            // *Obtener el contenido correspondiente segun el enlace
            let contenido = obtenerContenido(this.textContent)

            // *Insertar en el HTML lo que se encuentra en ciudades.js
            tituloElemento.innerHTML = contenido.titulo
            subtituloElemento.innerHTML = contenido.subtitulo
            parrafoElemento.innerHTML = contenido.parrafo
        })
    } 
);

// *Funcion que obtiene la informacion desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace];
}
