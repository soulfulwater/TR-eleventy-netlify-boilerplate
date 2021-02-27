$(document).ready(function () {

    $('#mobile-menu').click(function (e) {
        $(".mobile-toogle").slideToggle();
    });


    function keepAspectRatio(id, width, height) {
        var aspectRatioDiv = document.getElementById(id);
        aspectRatioDiv.style.width = window.innerWidth;
        aspectRatioDiv.style.height = (window.innerWidth / (width / height)) + "px";
    }
    keepAspectRatio("aspectRatio", 16.4, 9);
    window.onresize = function (event) {
        keepAspectRatio("aspectRatio", 16.4, 9);
    }


    $(function () {
        if ($('.testimonial-slider').length) {
            $('.testimonial-slider').owlCarousel({
                nav: false,
                dots: true,
                autoplay: true,
                items: 1,
                margin: 30,
                responsive: {
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    }
                }
            })
        }
    })

});