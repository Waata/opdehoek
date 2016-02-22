(function ($) {
var isNavBarShown = true;

    $(document).ready(function () {

        // hide .navbar first
        // $(".navbar").hide(false);

        // fade in .navbar
            $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 450) {
                    $('.navbar').fadeOut();
                    transitionTime: 150,
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