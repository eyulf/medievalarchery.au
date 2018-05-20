$(document).ready(function() {
    var header = $("#header");
    var height = $(window).height();
    header.addClass("no-background");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= height) {
            header.removeClass("no-background");
        } else {
            header.addClass("no-background");
        }
    });
});
