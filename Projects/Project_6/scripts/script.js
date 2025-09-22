const api_Key = '908b93ff99a9388e160f852ebb35694f';
const api_Url = 'https://api.themoviedb.org/3/'

document.getElementById('searchButton').addEventListener('click', searchMovies);

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value;

    fetch(`${api_Url}search/movie?api_key=${api_Key}&query=${searchInput}`)
    .then(res => res.json())
    .then(json => insertResults(json.results))
}

async function imagesExtraction(movieId){
    try{
        const imagesQuery = await fetch(`${api_Url}movie/${movieId}/images?api_key=${api_Key}`);
        const imagesResultsJson = await imagesQuery.json();
        return imagesResultsJson;
    }catch{
        alert('Hubo un error al extraer las imagenes desde la API.')
    }
    // fetch(`${api_Url}movie/${movieId}/images?api_key=${api_Key}`)
    // .then(res => res.json())
    // .then(json => console.log(json))
}

function insertResults(results){
    const resultsField = document.getElementById('results')
    resultsAmount = results.length
    console.log(resultsAmount)
    
    results.forEach(element => {
        imagesExtraction(element.id)
        console.log(element)
        const card = document.createElement('div');

        const movieTitle = document.createElement('h1');
        movieTitle.textContent = element.title;

        const movieDate = document.createElement('p');
        movieDate.textContent = element.release_date;

        const movieDescription = document.createElement('p');
        movieDescription.textContent = element.overview;

        const moviePoster = document.createElement('img');
        moviePoster.src = `${element.poster_path}`;

        resultsField.appendChild(card);
        card.appendChild(movieTitle);
        card.appendChild(movieDate);
        card.appendChild(movieDescription)
        card.appendChild(moviePoster);
    });
}