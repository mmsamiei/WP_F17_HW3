$(document).ready(function(){
    let owl = $("#owl-carousel-father-div");
    owl.owlCarousel({

        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items : 6,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        rtl: true
    });
    let mamad = document.getElementsByClassName("angle-point-to-right")[0];
    let mahdi = document.getElementsByClassName("angle-point-to-left")[0];
    mamad.onclick = function (e) {
        console.log("mamad 1");
        owl.trigger('prev.owl.carousel');
    };
    mahdi.onclick = function (e) {
        console.log("mamad 1");
        owl.trigger('next.owl.carousel');
    };

    let films = [
        {
            title :"Transformers",
            year : 2007
        },
        {
            title: "Frozen",
            year: 2013
        },
        {
            title :"Tangled",
            year : 2010
        },
        {
            title:"Toy Story 3",
            year: 2010
        },
        {
            title:"Monsters University",
            year: 2013
        },
        {
            title:"La La Land",
            year: 2016
        },
        {
            title:"The Amazing Spider-Man",
            year: 2012
        },
        {
            title:"Captain America: Civil War",
            year: 2016
        },
        {
            title:"The Avengers",
            year: 2012
        },
        {
            title:"Captain America: The First Avenger",
            year: 2011
        },
        {
            title:"Avengers: Age of Ultron",
            year: 2015
        },
        {
            title:"A Beautiful Mind",
            year: 2001
        },
        {
            title:"imitation game",
            year: 2014
        }

    ];

    for (let i=0;i<films.length ;i++){

        //url for theimdb api
        // url = "http://www.theimdbapi.org/api/find/movie?title="+films[i].title+"&year="+films[i].year;

        omdbapi_key = "9d16e1f7";
        // url for omdbapi
        url = "http://www.omdbapi.com/?t="+films[i].title+"&apikey="+omdbapi_key+"&plot=full";

        $.get(url).done(function (object){
            let new_img = document.createElement("img");
            new_img.setAttribute("src",object["Poster"]);
            let div_of_img = document.createElement("div");
            div_of_img.className = "item";
            div_of_img.appendChild(new_img);
            $('#owl-carousel-father-div')
                 .owlCarousel('add', div_of_img)
                 .owlCarousel('update')


            // let content = '<div class="item"> <img src='+object["Poster"]+'alt="Owl Image"> </div>';
            // $('#owl-carousel-father-div')
            //     .owlCarousel('add', content)
            //     .owlCarousel('update')

        });

    }
});

