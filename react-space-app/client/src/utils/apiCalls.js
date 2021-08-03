const fetch = require('node-fetch');

const nasaApiKey = '94jx5aj4QNfyedbpPQ5m3UkzkknBz4yKIZpynDay';

const dailyPhoto = () => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key='+nasaApiKey;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.getElementById("photo").src = data.url;
    })
}

dailyPhoto();

const marsRover = () => {
    //user will need to select sol ie. 0-1000, camera type and update url for customizable search
    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000camera=fhaz&api_key=${nasaApiKey}`;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

marsRover();


const spaceX = () => {

    const apiUrl = `https://api.spacexdata.com/v4/launches/latest`;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

spaceX();


const issSearch = () => {
    //user will need to select sol ie. 0-1000, camera type and update url for customizable search
    const apiUrl = `https://api.wheretheiss.at/v1/satellites/25544
    `;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

issSearch();


const spaceNews = () => {
    //user will need to select sol ie. 0-1000, camera type and update url for customizable search
    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles?title_contains=space
    `;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

spaceNews();



