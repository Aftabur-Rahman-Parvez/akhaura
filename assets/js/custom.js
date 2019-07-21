
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
    $("#home-galary-carousel").owlCarousel({
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
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 5
            }
        }
    });

    $('.js-conveyor-news').jConveyorTicker({
        anim_duration:   200,
        reverse_elm:     false,
        force_loop:      false ,
    });
    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animated',
            offset:       0,
            mobile:       true,
            live:         true,
            callback:     function(box) {

            },
            scrollContainer: null,
        }
    );
    wow.init();


})

