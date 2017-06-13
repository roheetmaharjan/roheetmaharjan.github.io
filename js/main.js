jQuery(document).ready(function(){
    
    jQuery('.burger-nav').click(function(e){
        
        jQuery('nav ul').toggleClass('navbar-collapse')
        
        e.preventDefault()
        
    })
})
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

$('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
