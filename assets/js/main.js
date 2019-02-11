$(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass("nav-scroll-color");
        } else
        if ($("nav").hasClass("nav-scroll-color")) {
            $("nav").removeClass("nav-scroll-color");

        }
    })
})