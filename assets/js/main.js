$(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $("nav").addClass("nav-scroll-color");
        } else
        if ($("nav").hasClass("nav-scroll-color")) {
            $("nav").removeClass("nav-scroll-color");

        }
    });
});
$(function () {
    $(".text").typed({
        strings: ["I Love <strong class='primary'>Coding</strong>", "And <strong class='primary'>Sharing Code</strong>"],
        typespeed: 0,
        loop: true,
    })
});