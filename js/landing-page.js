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
