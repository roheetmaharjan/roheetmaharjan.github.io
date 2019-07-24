
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
'use strict';

var c, currentScrollTop = 0,
    navbar = $('nav');

$(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
});
AOS.init();
});