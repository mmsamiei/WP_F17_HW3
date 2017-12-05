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
        }

    ];

    for (let i=0;i<films.length ;i++){
        console.log(JSON.stringify(films[i]))
        console.log(films[i].title)

        // let xhttp = new XMLHttpRequest();
        // xhttp.open("GET", "http://www.theimdbapi.org/api/find/movie?title="+films[i].title+"&year="+films[i].year, false);
        // xhttp.send();
        // let response = JSON.parse(xhttp.responseText);

        let content = '<div class="item"> <img src='+'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'+'alt="Owl Image"> </div>'
        // let owl = $("#owl-carousel-father-div");
        $('#owl-carousel-father-div')
            .owlCarousel('add', content)
            .owlCarousel('update')
        // owl.append(content);

        url = "http://www.theimdbapi.org/api/find/movie?title="+films[i].title+"&year="+films[i].year;
        $.get(url).done(function (object){
            // console.log(object[0]["poster"]["thumb"]);
            let content = '<div class="item"> <img src='+'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'+'alt="Owl Image"> </div>'

        });

    }
});

