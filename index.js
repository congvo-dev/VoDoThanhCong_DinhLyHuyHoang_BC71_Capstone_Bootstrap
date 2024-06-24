// START DARK MODE
document.getElementById("switchButton").onclick = function() {
    document.getElementById("myBody").classList.toggle("dark");
}
// END DARK MODE

// START number
// countup config 
      $(".counter").countUp();

      $('.counter').countUp({
        'time': 3000,
      });
// END number

// START nutrition
// magicpopup config
$(document).ready(function () {
    $(".popup-with-zoom-anim").magnificPopup({
      type: "inline",
  
      fixedContentPos: false,
      fixedBgPos: true,
  
      overflowY: "auto",
  
      closeBtnInside: true,
      preloader: false,
  
      midClick: true,
      removalDelay: 300,
      mainClass: "my-mfp-zoom-in"
    });
  });
// END nutrition

// START TESTIMONIALS
// owlcarousel config
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    margin: 20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:1,
        },
        992:{
            items:2,
        }
    }
})
// END TESTIMONIALS

// to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}