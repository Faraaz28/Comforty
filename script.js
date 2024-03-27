$(".toggle").click(function(){
    $("h1, h2, p, h4, .catalog, a, h6,").toggleClass("textcl");
    $("body").toggleClass("bg");
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })