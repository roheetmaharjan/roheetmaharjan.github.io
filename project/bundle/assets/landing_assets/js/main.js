$(document).ready(function(){
    $('.icon').click(function(){
        $('.icon').toggleClass('active');
    })
})

$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
       $('.top-header').addClass('fixed-header');
    }
    else {
       $('.top-header').removeClass('fixed-header');
    }
});

new WOW().init();

$(window).stellar();