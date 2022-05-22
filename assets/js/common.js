// Make Header Sticky Code
var header = $(".stickyHeader");
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        header.addClass("stickyHeader");
    } else {
        header.removeClass("stickyHeader");
    }
});
