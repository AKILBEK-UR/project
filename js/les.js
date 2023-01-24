'use strict';


let numberOfFilms;

function start(){
    numberOfFilms = +prompt('how many films did u watched', "");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('how many films did u watched', "");            
    }
}
start();

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 1; i++){
    const mov = prompt("which film did u watched last time?","");
    const rate = +prompt("rate it..","");
    if(mov != null && mov != "" && rate != null && rate != 0 && mov.length < 50){
        personalMovieDB.movies[mov] = rate;
    }else{
        i--;
    }
}
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Less films watched!");
    } else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Classic watcher!");
    }else if(personalMovieDB.count > 30){
        console.log("You are kinoman!");
    }else{
        console.log("Error");
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function WriteYourGenres(){
    for(let i=1;i<=3;i++){
    const genres = prompt(`Your ${i} favourite genre?`,"");
    personalMovieDB.genres[i-1] = genres;
    }
}

WriteYourGenres();