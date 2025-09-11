let api_key = '8192957ca39f8d2de02e594adc059dd0';

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
    const centigradosConvercion = respuestaApi.main.temp - 273.15;
    const centigradosRedondeo = Math.round(centigradosConvercion)
    campoDatosClima.innerText = (centigradosRedondeo+`°`);
}
