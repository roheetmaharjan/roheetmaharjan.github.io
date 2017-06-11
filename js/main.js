jQuery(document).ready(function(){
    
    jQuery('.burger-nav').click(function(e){
        
        jQuery('nav ul').toggleClass('navbar-collapse')
        
        e.preventDefault()
        
    })
})