import { api_Credentials } from "./credentials.js";

const api_Key = api_Credentials.api_Key;
const api_Url = api_Credentials.api_Url;

document.getElementById('searchButton').addEventListener('click', searchMovies);

function searchMovies(){
    let searchInput = document.getElementById('searchInput').value;

    fetch(`${api_Url}search/movie?api_key=${api_Key}&query=${searchInput}`)
    .then(res => res.json())
    .then(json => insertResults(json.results))
}

async function imagesExtraction(movieId){
    try{
        const images_Api = 'http://image.tmdb.org/t/p/w780';
        const imagesQuery = await fetch(`${api_Url}movie/${movieId}/images?api_key=${api_Key}`);
        const imagesResultsJson = await imagesQuery.json();
        const imagesTermination = imagesResultsJson.posters[0].file_path;
        const imagesFullUrl = await `${images_Api}${imagesTermination}`;
        return imagesFullUrl;
    }catch{
    }
}

async function insertResults(results){
    const resultsField = document.getElementById('results')
    resultsField.innerHTML = '';
    const resultsAmount = results.length
    console.log(resultsAmount)
    console.log(results)
    
    for (const element of results) {
        const card = document.createElement('div');
        const imagesUrl = await imagesExtraction(element.id)
        console.log(imagesUrl)
        const movieTitle = document.createElement('h1');
        movieTitle.textContent = element.title;

        const movieDate = document.createElement('p');
        movieDate.textContent = element.release_date;

        const movieDescription = document.createElement('p');
        movieDescription.textContent = element.overview;
        movieDescription.classList.add('description')

        const moviePoster = document.createElement('img');
        if(imagesUrl){
            moviePoster.src = `${imagesUrl}`;
        }else{
            moviePoster.src = './assets/no-image-avariable.png'
        }

        resultsField.appendChild(card);
        card.appendChild(movieTitle);
        card.appendChild(movieDate);
        card.appendChild(movieDescription)
        card.appendChild(moviePoster);
    }
}