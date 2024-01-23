const API_KEY = '6265479d138338f112ad9783ca7d0d06'
const apiUrl = `https://api.noroff.dev/api/v1/square-eyes`;
const IMAGEPATH = 'https://image.tmdb.org/t/p/w500/';

const main = document.querySelector('#main');

function showMovies () {

    fetch(apiUrl)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.log(error)) // handle the error

    // fetch(url)
    
    // .then(function(data){
    //     console.log(data);
    //     data.results.forEach(element=>{
    //         const el= document.createElement('div');
    //         const image= document.createElement('img');
    //         const text= document.createElement('h2');
            
    //         text.innterHTML = `${element.title}`;
    //         image.src = IMAGEPATH + element.poster_path;
    //         el.appendChild(image);
    //         el.appendChild(text);
    //         main.appendChild(el);
    //     })
    // })
}

function movie () 

