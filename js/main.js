// A $( document ).ready() block.
$( document ).ready(function() {
    // external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


});
$(document).ready(function() {
  $(".exp-wrap").owlCarousel({
    items: 2,
    slideSpeed: 500,
    autoPlay: 5000,
    stopOnHover: true,
    pagination:false,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 480 up
      640 : {
        items: 1
      },
      // breakpoint from 768 up
      768 : {
        items: 2
      }
  }
  });
});

$(window).stellar();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 20) {
      $(".header").addClass("stick");
  } else {
      $(".header").removeClass("stick");
  }
});
// Wrap every letter in a span
$('.banner-caption .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
  .add({
    targets: '.banner-caption .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: function(el, i) {
      return 150 * i;
    }
  }).add({
    targets: '.animate',
    opacity: 0,
    duration: 2500,
    easing: "easeOutExpo",
    delay: 500
  });
