$(document).ready(function() {
    var header = $("#header");
    var height = $("#main").position().top;

    header.addClass("no-background");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var height = $("#main").position().top;

        if (scroll >= height) {
            header.removeClass("no-background");
        } else {
            header.addClass("no-background");
        }
    });
});

$(function() {
    $('#banner, body').vegas({
        timer: false,
        delay: 10000,
        slides: [
            { src: '/assets/images/slider/group1.jpg' },
            { src: '/assets/images/slider/group2.jpg' },
            { src: '/assets/images/slider/group3.jpg' }
        ]
    });
});
