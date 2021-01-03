$(document).ready(function () {
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
    })
})

$(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $('.top-header').addClass('fixed-header');
    }
    else {
        $('.top-header').removeClass('fixed-header');
    }
});

// var password;
// var pass1 = "bundle456";

// password = prompt('Please enter your password to view this page!', ' ');

// if (password == pass1)
//     alert('Password Correct! Click OK to enter!');
// else {
//     window.location = "https://roheetmaharjan.github.io/";
// }
