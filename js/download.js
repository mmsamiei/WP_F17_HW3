function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



$(document).ready(function(){


    let imdbid = getParameterByName('id');
    console.log(imdbid)
    omdbapi_key = "9d16e1f7";
    // url for omdbapi
    url = "http://www.omdbapi.com/?i="+imdbid+"&apikey="+omdbapi_key+"&plot=full";
    $.get(url).done(function (object){

        let cover_div = document.getElementsByClassName("cover")[0];
        let img = cover_div.getElementsByTagName("img")[0];
        img.src=object["Poster"];

        let imdb_rating_span = document.getElementById("imdb_rating");
        imdb_rating_span.innerHTML = object["imdbRating"];

        let imdb_votes_span = document.getElementById("imdb_votes");
        imdb_votes_span.innerHTML = object["imdbVotes"];

        let film_year_span = document.getElementsByClassName("film_year")[0];
        film_year_span.innerHTML = object["Year"];

    });
});