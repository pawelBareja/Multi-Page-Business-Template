
// gallery filter
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {

            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


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

//carousel on product pages
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}


//map on contact
      function initMap() {
        var aluflam = {lat: 53.17683, lng: 20.744671};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: aluflam,
		  

        });
        var marker = new google.maps.Marker({
          position: aluflam,
          map: map,

        });
      }



