jQuery(document).ready(function(){

    /*smooth scrolling*/
    $('.smoothScroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 85
                }, 1000);
                return false;
            }
        }
    });

    /*menu */
    $('#menu-1').megaMenu({
            // DESKTOP MODE SETTINGS
            logo_align          : 'left',    // align the logo left or right. options (left) or (right)
            links_align         : 'right',    // align the links left or right. options (left) or (right)
            searchBar_align     : 'right',   // align the search bar left or right. options (left) or (right)
            trigger             : 'hover',   // show drop down using click or hover. options (hover) or (click)
            effect              : 'scale',    // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
            effect_speed        : 400,       // drop down show speed in milliseconds
            sibling             : true,      // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
            outside_click_close : false,      // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
            top_fixed           : false,     // fixed the menu top of the screen. options (true) or (false)
            sticky_header       : false,     // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 200,       // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            menu_position       : 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
            full_width          : false,            // make menu full width. options (true) or (false)
            // MOBILE MODE SETTINGS
            mobile_settings     : {
                collapse            : true, // collapse the menu on click. options (true) or (false)
                sibling             : true,  // hide the others showing drop downs when click on current drop down. options (true) or (false)
                scrollBar           : true,  // enable the scroll bar. options (true) or (false)
                scrollBar_height    : 400,   // scroll bar height in px value. this option works if the scrollBar option true.
                top_fixed           : false, // fixed menu top of the screen. options (true) or (false)
                sticky_header       : false, // menu fixed on top when scroll down down. options (true) or (false)
                sticky_header_height: 200    // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            }
        });

    $('#menu-2').megaMenu({
        logo_align          : 'left',    
        links_align         : 'right',    
        searchBar_align     : 'right',   
        trigger             : 'hover',   
        effect              : 'scale',    
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-3').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'left',    
        searchBar_align     : 'right',
        socialBar_align     : 'right',   
        trigger             : 'hover',   
        effect              : 'scale',    
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-4').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'right',    
        searchBar_align     : 'right', 
        socialBar_align     : 'right',  
        trigger             : 'hover',
        top_fixed           : true,   
        effect              : 'scale',    
        mobile_settings     : {
            collapse            : true
        }
    });
    $('#menu-5').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'right',    
        searchBar_align     : 'right', 
        socialBar_align     : 'right',
        top_fixed           : false,  
        trigger             : 'hover',   
        effect              : 'scale',    
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-6').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'right',    
        searchBar_align     : 'right', 
        socialBar_align     : 'right',  
        trigger             : 'hover',   
        effect              : 'scale',    
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-7').megaMenu({ 
        menu_position       : 'vertical-left',
        trigger             : 'click',
        effect              : 'fade'
    });

    $('#menu-8').megaMenu({ 
        logo_align          : 'left',
        socialBar_align     : 'right' 
    });

    $('#menu-9').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'right',        
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-10').megaMenu({ 
        menu_position       : 'vertical-left',
        trigger             : 'click',
        effect              : 'fade'
    });

    $(".menu-collapse-trigger").click(function(){
        $(header).toggleClass("active");
        $(".menu-wrapper").slideToggle("slow");
        $(".menu-collapse-trigger").toggleClass("active");
    });

    $('#menu-11').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'left',        
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-12').megaMenu({ 
        logo_align          : 'left',  
        links_align         : 'right',  
        searchBar_align     : 'right',     
        mobile_settings     : {
            collapse            : true
        }
    });

    $('#menu-13').megaMenu({ 
        menu_position:'vertical-left',
        trigger             : 'click',
        effect              : 'fade',
        full_width          : true,
        top_fixed           : true,
        mobile_settings     : {
            collapse            : true
        }
    });
    $('#menu-14').megaMenu({ 
        menu_position:'vertical-right',
        trigger             : 'click',
        effect              : 'fade',
        full_width          : true,
        top_fixed           : true,
        mobile_settings     : {
            collapse            : true
        }
    });
    $('#menu-15').megaMenu({ 
        menu_position:'vertical-left',
        trigger             : 'click',
        effect              : 'fade',
        full_width          : true,
        top_fixed           : true,
        mobile_settings     : {
            collapse            : true
        }
    });

    /*wow*/
    new WOW().init();


    /*tabs*/
    $('ul.tabs').each(function() {
        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function() {
            $(this.hash).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function(e) {
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            // Make the tab active.
            $active.addClass('active');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });

    /*counter*/
    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

    $('.countdown').downCount({
        date: '08/30/2016 12:00:00',
        offset: +1
    });

    /*Scrol to fixed*/
    $('#menu-1').scrollToFixed();
    $('#menu-2').scrollToFixed();
    $('#menu-3').scrollToFixed();
    $('#menu-5').scrollToFixed();
    $('#menu-6').scrollToFixed();
    $('#toggle-menu').scrollToFixed();
    $('#menu-9').scrollToFixed();
    $('#menu-11').scrollToFixed();
    $('#menu-12').scrollToFixed();
    

    /*Stellar: parallex effect*/
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });


    /* Carousel */
    $('.testimonial').owlCarousel({
        autoplay: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.testimonial1').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.social-testimonial').owlCarousel({
        autoplay: true,
        loop: true,
        responsiveClass: true,
        dotsEach: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    $('.affiliation-slider').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1200: {
                items: 7,
            }
        }
    })

    $('.tool-slider').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            }
        }
    })

    $('.feature-news-slider').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 4,
            }
        }
    })

    $('.feature-construction-slider').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.service-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        dots:true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.education-feature-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 5,
        responsiveClass: true,
        autoplay: true,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.medical-main-slider').owlCarousel({
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        dots: false,
        mouseDrag: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    })

    $('.social-main-slider').owlCarousel({
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        dots: false,
        mouseDrag: false,
    })

    $('.ecommerce-main-slider').owlCarousel({
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        mouseDrag: false,
        dots: true
    })

    $('.vehicle-main-slider').owlCarousel({
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        mouseDrag: false,
        dots: true
    })

    $('.plumbing-feature-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        mouseDrag: false,
        dots: true
    })

    $('.restaurant-feature-carousel').owlCarousel({
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        mouseDrag: false,
        dots: true
    })

    $('.blog-main-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        mouseDrag: false,
        dots: true
    })

    $('.vehicle-feature-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items:1,
        loop:true,
        mouseDrag: false,
        dots: false,
        nav: true,
        navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ],
    })

    $('.team-slider').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.blog-social').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.app-testimonial').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    })

    $('.realestate-feature-carousel').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        mouseDrag: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    })

    $('.restaurent-blog').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    })

    $('.branding-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout:2000,
        loop: true,
        margin: 16,
        dots: false,
        nav: true,
        navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.travel-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout:2000,
        loop: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.construction-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout:2000,
        loop: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.restaurant-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout:2000,
        loop: true,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.portfolio-holder').owlCarousel({
        loop: true,
        responsiveClass: true,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 4,
            }
        }
    })

    $('.app-slider').owlCarousel({
        autoplay: false,
        autoplayTimeout:2000,
        loop: true,
        margin: 16,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.plumbing-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout:2000,
        loop: true,
        dots: false,
        nav: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.education-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout:2000,
        loop: true,
        dots: false,
        nav: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })


    $('.restaurant-testimonial').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.consulting-project-slider').owlCarousel({
        autoplay: false,
        loop: true,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.video-intro-slider').owlCarousel({
        autoplay: false,
        loop: true,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })

    $('.feature-classify-slider').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 25,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })

    $('.team-interior').owlCarousel({
        autoplay: false,
        loop: true,
        autoplay: true,
        dots: true,
        margin: 20,
        dotsEach: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })

    $('.vehicle-testimonial').owlCarousel({
        autoplay: true,
        loop: true,
        dotsEach: true,
        dots: true,
        responsiveClass: true,
        dotsEach: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    $('.carousel-consulting-blog').owlCarousel({
        autoplay: false,
        loop: true,
        responsiveClass: true,
        margin: 25,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    })

    $('.fitness-aff-slider').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1200: {
                items: 6,
            }
        }
    })

    $('.testimonial-fitness1').owlCarousel({
        autoplay: true,
        loop: true,
        responsiveClass: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    
    /* vehicle-wiki */
    $(".overflow-wiki, .vehicle-tab ul.tabs").mCustomScrollbar({
        theme:"dark-thin"
    });

    /*slider scroller agency*/
    $(".portfolio-slider").mCustomScrollbar({
      axis:"x",
      scrollButtons:{enable:true},
      theme:"rounded-dark",
      scrollbarPosition:"outside"
  });

    /*restaurant list holder*/
    $(".list-holder").mCustomScrollbar({
        theme:"dark-thin"
    });

    /*photography list view and grid view*/
    $('.js-switcher').click(function () {
        $('button span').toggleClass('active');
        $('.grid-photograph').toggleClass('full_width');
    });


    //Grid
	// init Isotope for corporate
	var $grid = $('.grid').isotope({
		layoutMode: 'packery',
		packery: {
			columnWidth: '.grid-sizer'
		},
		itemSelector: '.element-item',
		percentPosition: true
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
	$('.filters-button-group').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

    /*fancy box*/
    $(".fancybox.expand").fancybox({
        helpers: {
           title : {
            type : 'outside'
        },
        overlay : {
            speedOut : 0
        }
    }
});

    $(".fancybox1").fancybox({
        helpers: {
           title : {
            type : 'outside'
        },
        overlay : {
            speedOut : 0
        }
    }
});

    $(".fancybox2").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',
        padding: 10,
        afterLoad: function() {
            this.title = this.title + '<a href="' + this.href + '">Download</a> ';
        },
        helpers : {
            title   : {
                type: 'inside'
            },
            thumbs  : {
                width   : 100,
                height  : 100
            }
        },
        overlay : {
            speedOut : 0
        }
    });

    //END

});


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
    }
},
"color": {
  "value": "#ffffff"
},
"shape": {
  "type": "circle",
  "stroke": {
    "width": 0,
    "color": "#000000"
},
"polygon": {
    "nb_sides": 5
},
"image": {
    "src": "img/github.svg",
    "width": 100,
    "height": 100
}
},
"opacity": {
  "value": 1,
  "random": true,
  "anim": {
    "enable": true,
    "speed": 1,
    "opacity_min": 0,
    "sync": false
}
},
"size": {
  "value": 3,
  "random": true,
  "anim": {
    "enable": false,
    "speed": 4,
    "size_min": 0.3,
    "sync": false
}
},
"line_linked": {
  "enable": false,
  "distance": 150,
  "color": "#ffffff",
  "opacity": 0.4,
  "width": 1
},
"move": {
  "enable": true,
  "speed": 1,
  "direction": "none",
  "random": true,
  "straight": false,
  "out_mode": "out",
  "bounce": false,
  "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 600
}
}
},
"interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
    },
    "onclick": {
        "enable": true,
        "mode": "repulse"
    },
    "resize": true
},
"modes": {
  "grab": {
    "distance": 400,
    "line_linked": {
      "opacity": 1
  }
},
"bubble": {
    "distance": 250,
    "size": 4,
    "duration": 2,
    "opacity": 0,
    "speed": 3
},
"repulse": {
    "distance": 400,
    "duration": 0.4
},
"push": {
    "particles_nb": 4
},
"remove": {
    "particles_nb": 2
}
}
},
"retina_detect": true
});


