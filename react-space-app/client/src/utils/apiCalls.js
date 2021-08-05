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
        document.querySelector(".daily-photo").src = data.url;
    })
}

//dailyPhoto();

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

// marsRover();


const spaceX = () => {

    const apiUrl = `https://api.spacexdata.com/v4/launches/latest`;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.querySelector(".spaceX-news").innerHTML = data.details;
    })
}


// spaceX();



const issSearch = () => {
    //user will need to select sol ie. 0-1000, camera type and update url for customizable search
    const apiUrl = `https://api.wheretheiss.at/v1/satellites/25544`;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.querySelector(".space-lat").innerHTML = data.latitude;
        document.querySelector(".space-long").innerHTML = data.longitude;
    })
}

// issSearch();


const spaceNews = () => {
    //user will need to select sol ie. 0-1000, camera type and update url for customizable search
    const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles?title_contains=space`;

    fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.querySelector(".news-img0").src = data[0].imageUrl;
        document.querySelector(".title0").innerHTML = data[0].title;
        document.querySelector(".summary0").innerHTML= data[0].summary;
        document.querySelector(".news-story0").href = data[0].url;
        document.querySelector(".news-story-link0").innerHTML = data[0].url;
        document.querySelector(".news-img1").src = data[1].imageUrl;
        document.querySelector(".title1").innerHTML = data[2].title;
        document.querySelector(".summary1").innerHTML= data[2].summary;
        document.querySelector(".news-story1").href = data[2].url;
        document.querySelector(".news-story-link1").innerHTML = data[2].url;
        document.querySelector(".news-img2").src = data[3].imageUrl;
        document.querySelector(".title2").innerHTML = data[3].title;
        document.querySelector(".summary2").innerHTML= data[3].summary;
        document.querySelector(".news-story2").href = data[3].url;
        document.querySelector(".news-story-link2").innerHTML = data[3].url;
        document.querySelector(".news-img3").src = data[4].imageUrl;
        document.querySelector(".title3").innerHTML = data[4].title;
        document.querySelector(".summary3").innerHTML= data[4].summary;
        document.querySelector(".news-story3").href = data[4].url;
        document.querySelector(".news-story-link3").innerHTML = data[4].url;
        document.querySelector(".news-img4").src = data[5].imageUrl;
        document.querySelector(".title4").innerHTML = data[5].title;
        document.querySelector(".summary4").innerHTML= data[5].summary;
        document.querySelector(".news-story5").href = data[5].url;
        document.querySelector(".news-story-link5").innerHTML = data[5].url;
        document.querySelector(".news-img6").src = data[6].imageUrl;
        document.querySelector(".title6").innerHTML = data[6].title;
        document.querySelector(".summary6").innerHTML= data[6].summary;
        document.querySelector(".news-story6").href = data[6].url;
        document.querySelector(".news-story-link6").innerHTML = data[6].url;
        document.querySelector(".news-img7").src = data[7].imageUrl;
        document.querySelector(".title7").innerHTML = data[7].title;
        document.querySelector(".summary7").innerHTML= data[7].summary;
        document.querySelector(".news-story7").href = data[7].url;
        document.querySelector(".news-story-link7").innerHTML = data[7].url;
        document.querySelector(".news-img8").src = data[8].imageUrl;
        document.querySelector(".title8").innerHTML = data[8].title;
        document.querySelector(".summary8").innerHTML= data[8].summary;
        document.querySelector(".news-story8").href = data[8].url;
        document.querySelector(".news-story-link8").innerHTML = data[8].url;
        document.querySelector(".news-img9").src = data[9].imageUrl;
        document.querySelector(".title9").innerHTML = data[9].title;
        document.querySelector(".summary9").innerHTML= data[9].summary;
        document.querySelector(".news-story9").href = data[9].url;
        document.querySelector(".news-story-link9").innerHTML = data[9].url;
    })
}

// spaceNews();


module.exports = { dailyPhoto, marsRover, spaceNews, spaceX, issSearch }