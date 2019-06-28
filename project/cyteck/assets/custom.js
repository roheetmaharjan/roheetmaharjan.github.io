$(window).scroll(function () {
    var pos = $(window).scrollTop();
    if (pos > 0) {
        $('.navbar').addClass('nav-on-scroll');
    }
    if (pos == 0) {
        $('.navbar').removeClass('nav-on-scroll');
    }
});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.product-slider').bxSlider({
        controls: false
    });
    $('.hero-banner-slider').bxSlider({
        controls: false
    });
    $('.shop-banner-slider').bxSlider({
        controls: false
    });
    $(".category-menu").click(function(){
        $(".category-list").toggle();
    });
    var slider = $('.quote-slider').bxSlider({
        pagerCustom: '#testi-bx-pager',
        controls: false
    });

    $('a.pager-prev').click(function () {
        var current = slider.getCurrentSlide();
        slider.goToPrevSlide(current) - 1;
    });
    $('a.pager-next').click(function () {
        var current = slider.getCurrentS
        slide();
        slider.goToNextSlide(current) + 1;
    });
});