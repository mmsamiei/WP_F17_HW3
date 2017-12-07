function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function clickTab(clicked_tab){
    $(clicked_tab).addClass("active_item");
    $(clicked_tab).siblings().removeClass("active_item")
    $('.content').get()[0].innerHTML="";
}

$(document).ready(function(){


    let imdbid = getParameterByName('id');
    console.log(imdbid)


    let tabs_a = $('.movie-tabs-div').find('li');
    for(let i=0;i<tabs_a.length;i++){
        tabs_a[i].addEventListener("click",function () {
            clickTab(this);
        });
    }



    omdbapi_key = "9d16e1f7";
    // url for omdbapi
    url = "http://www.omdbapi.com/?i="+imdbid+"&apikey="+omdbapi_key+"&plot=full";
    $.get(url).done(function (object){

        let film_title_header = $('.film_title_div>h1').get(0);
        film_title_header.innerHTML="دانلود فیلم "+object["Title"];
        let cover_div = document.getElementsByClassName("cover")[0];
        let img = cover_div.getElementsByTagName("img")[0];
        img.src=object["Poster"];

        let imdb_rating_span = document.getElementById("imdb_rating");
        imdb_rating_span.innerHTML = object["imdbRating"];

        let imdb_votes_span = document.getElementById("imdb_votes");
        imdb_votes_span.innerHTML = object["imdbVotes"];

        let film_year_span = document.getElementsByClassName("film_year")[0];
        film_year_span.innerHTML = object["Year"];

        let film_languages_span = document.getElementsByClassName("film_languages")[0];

        let language = object["Language"].split(",");
        for(let i=0;i<language.length;i++){
            if(i!=0){
                film_languages_span.append(' و ')
            }
            let language_span=document.createElement("span");
            language_span.innerHTML=language[i];
            film_languages_span.append(language_span);
        }


        let film_mpaa_span = document.getElementsByClassName("mpaa")[0];
        film_mpaa_span.innerHTML = object["Rated"];

        let film_countries_span = document.getElementsByClassName("countries")[0];
        let film_countries_div = $('div.countries').get(0);
        let countries = object["Country"].split(",");
        for(let i=0;i<countries.length;i++){
            if(i!=0){
                film_countries_div.append(' و ')
            }
            let country_span=document.createElement("span");
            country_span.innerHTML=countries[i];
            film_countries_div.append(country_span);
        }



        let film_story_div = document.getElementsByClassName("story")[0];
        film_story_div.innerHTML = "خلاصه داستان: " + object["Plot"];

        let film_directors_span = $('span.director').get(0);
        film_directors_span.innerHTML = object["Director"];



        let film_writer_div = $('div.writer').get(0);
        let writers = object["Writer"].split(",");
        for(let i=0;i<writers.length;i++){
            if(i!=0){
                film_writer_div.append(' و ')
            }
            let writer_span=document.createElement("span");
            writer_span.innerHTML=writers[i].replace(/ *\([^)]*\) */g, "");
            film_writer_div.append(writer_span);
        }


        let film_actor_div = $('div.actor').get(0);
        let actors = object["Actors"].split(",");
        for(let i=0;i<actors.length;i++){
            if(i!=0){
                film_actor_div.append(' و ')
            }
            let actor_span=document.createElement("span");
            actor_span.innerHTML=actors[i];
            film_actor_div.append(actor_span);
        }



    });
});