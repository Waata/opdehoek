// = require jquery
// = require bootstrap-sprockets
// = require_tree .


// alert("Welkom op de Beta site van OpDeHoek")

(function ($) {
var isNavBarShown = true;

    $(document).ready(function () {

        // fade in .navbar
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 200) {
                    $('.navbar').fadeOut();
                    transitionTime: 2200    ,
                    isNavBarShown = true;

                } else {
                $('.navbar').fadeIn();
                isNavBarShown = false;

            } 
        });
        /* Show navbar */

        $('#shownav').hover(function () {
            if (isNavBarShown) { return; }
            $('.navbar').fadeIn();
        });

        /* when navbar is hovered over it will override previous */

        $('.navbar').hover(function () {
            if (isNavBarShown) { return; }
            $('.navbar').show();
        }, function () {
            if (isNavBarShown) { return; }
            $('.navbar').fadeOut();
        });
    });
}(jQuery));