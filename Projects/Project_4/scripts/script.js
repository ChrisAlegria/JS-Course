import { api_key } from "./credentials.js";

async function queryRequestApi(nombreCiudad){
    try{
        const apiQuery = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${api_key}`);
        const json = await apiQuery.json();
        if(json.cod && json.cod == 200){
            console.log(json);
            return json;
        }else{
            alert('Por favor enviar una ciudad valida.')
        }
    }
    catch{
        alert('Hubo un error al procesar la informacion desde la API.')
    }
}

const botonBuscar = document.getElementById('botonBusqueda');
botonBuscar.addEventListener('click', async function() {
    const ciudadIngresada = document.getElementById('ciudadEntrada').value;
    if(ciudadIngresada !== ''){
        const respuestaApi = await queryRequestApi(ciudadIngresada);
        insercionInformacion(respuestaApi)
    } else {
        alert('Tu campo esta vacio');
    }
});

function insercionInformacion(respuestaApi){
    const campoDatosClima = document.getElementById('datosClima');
    campoDatosClima.innerHTML = '';
    
    const centigradosConvercion = respuestaApi.main.temp - 273.15;
    const ciudadNombre = respuestaApi.name;
    const centigradosRedondeo = Math.floor(centigradosConvercion);
    const descripcionCiudad = respuestaApi.weather[0].description;
    const icononoClima = respuestaApi.weather[0].icon;

    const ciudadTitulo = document.createElement('h1');
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es de: ${centigradosRedondeo}°`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icononoClima}@2x.png`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion metereologica es: ${descripcionCiudad}`;

    campoDatosClima.appendChild(ciudadTitulo);
    campoDatosClima.appendChild(temperaturaInfo);
    campoDatosClima.appendChild(descripcionInfo);
    campoDatosClima.appendChild(iconoInfo)
}
