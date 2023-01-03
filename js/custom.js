// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function(){

    if($('.brands_slider').length)
         {
             var brandsSlider = $('.brands_slider');
 
             brandsSlider.owlCarousel(
             {
                 loop:true,
                 autoplay:true,
                 autoplayTimeout:5000,
                 nav:false,
                 dots:false,
                 autoWidth:true,
                 items:8,
                 margin:42
             });
 
             if($('.brands_prev').length)
             {
                 var prev = $('.brands_prev');
                 prev.on('click', function()
                 {
                     brandsSlider.trigger('prev.owl.carousel');
                 });
             }
 
             if($('.brands_next').length)
             {
                 var next = $('.brands_next');
                 next.on('click', function()
                 {
                     brandsSlider.trigger('next.owl.carousel');
                 });
             }
         }
 
 
     });