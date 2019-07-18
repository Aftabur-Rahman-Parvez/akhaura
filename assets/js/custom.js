
$(document).ready(function(){
    // home-slider-carousel slider js
    $("#home-slider-carousel").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,

       animateOut: 'fadeOut',
       animateIn: 'fadeIn',

        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1024: {
                items: 1
            },

            1366: {
                items: 1
            }
        }
    });

    // home-news-carousel slider js
    // $('.news-slick').slick({
    //     speed: 9000,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     centerMode: true,
    //     cssEase: 'linear',
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     infinite: true,
    //     initialSlide: 1,
    //     draggable: true,
    //     arrows: false,
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //     touchMove: true,
    //     buttons: false,
    //     focusOnSelect:false,
    // });
    $('.js-conveyor-news').jConveyorTicker({
        anim_duration:   200,
        reverse_elm:     false,
        force_loop:      false ,
    });


})

