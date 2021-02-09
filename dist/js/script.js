
$(function() {
    // navbar dropdown end
    function display_menu(){
        var nav_container = document.querySelector('.nav-container');
        (!nav_container.classList.contains("display_menu")) ? nav_container.classList.add("display_menu") : nav_container.classList.remove("display_menu");
    }
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ],    
        prevArrow: "<button class='slick-prev'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='slick-next'><i class='fas fa-angle-right'></i></button>"
    });

    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ],    
        prevArrow: "<button class='slick-prev'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='slick-next'><i class='fas fa-angle-right'></i></button>"
    });
    $('.adBanner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ], 
        prevArrow: "<button class='slick-prev'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='slick-next'><i class='fas fa-angle-right'></i></button>"
    });
    
});