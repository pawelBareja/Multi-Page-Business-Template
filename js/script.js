//animation of mobile menu bars
jQuery(document).ready(function() {
    jQuery('.burger-menu').click(function(e) {
        jQuery('.main-nav').toggleClass('visible');
		
		jQuery('.bar1').toggleClass('change1');
		jQuery('.bar2').toggleClass('change2');
		jQuery('.bar3').toggleClass('change3');
 
        e.preventDefault();
    });
});	

jQuery(document).ready(function() {
    jQuery('.dropdown').click(function(e) {
        jQuery('.list-menu').toggle();

        e.preventDefault();
    });
});	



