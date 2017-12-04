
$(document).ready(function(){
    let owl = $(".owl-carousel");
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
});

