const API_KEY = '6265479d138338f112ad9783ca7d0d06'
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;
const IMAGEPATH = 'https://image.tmdb.org/t/p/w500/';

const main = document.querySelector('#main');

function showMovies (url) {
    fetch(url)
    .then(res => res.json())
    .then(function(data){
        console.log(data);
        data.results.forEach(element=>{
            const el= document.createElement('div');
            const image= document.createElement('img');
            const text= document.createElement('h2');
            
            text.innterHTML = `${element.title}`;
            image.src = IMAGEPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            main.appendChild(el);
        })
    })
}