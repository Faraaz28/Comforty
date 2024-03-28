$(".roundButton").click(function(){
    $("h1, h2, h3, svg, h5, p, h4, .catalog, a, h6, .owl-theme").toggleClass("textcol");
    $("body, .card, .cardd-border").toggleClass("bg");
    });

    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // })