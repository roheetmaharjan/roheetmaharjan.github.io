// A $( document ).ready() block.
$(document).ready(function () {
  // external js: isotope.pkgd.js


  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };

  // bind filter button click
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
      filter: filterValue
    });
  });

  // bind sort button click
  $('#sorts').on('click', 'button', function () {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({
      sortBy: sortByValue
    });
  });

  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
  $('.exp-wrap,.pen-list').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 2,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  var scroll = $(window).scrollTop();

  if (scroll >= 20) {
    $(".header").addClass("stick");
  } else {
    $(".header").removeClass("stick");
  };
  // Wrap every letter in a span
  $('.animate .letters').each(function () {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline({
      loop: true
    })
    .add({
      targets: '.animate .line',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.animate .line',
      translateX: [0, $(".animate .letters").width()],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.animate .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: function (el, i) {
        return 34 * (i + 1)
      }
    }).add({
      targets: '.animate',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

  $(window).stellar();
});
