/********** activating carousel sliders ********* */
$(document).ready(function() {


// activating main slider
$('.main-slider').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    smartSpeed: 1000,
    stagePadding: 0,
    margin: 0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// adding a custom navs

$(".custom-next").click(function(e) {
    e.preventDefault();
    $(".main-slider").trigger("next.owl.carousel");
});
$(".custom-prev").click(function(e) {
    e.preventDefault();
    $(".main-slider").trigger("prev.owl.carousel");
});

// certifications in detistry 

$('#certifications').owlCarousel({
    items: 3,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: false,
    margin: 0,
    dots:false,
    nav: false,
    responsive:{
        0:{
            items:2,
            margin:10
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// adding a custom navs

$(".custom-up").click(function(e) {
    e.preventDefault();
    $("#certifications").trigger("next.owl.carousel");
});
$(".custom-down").click(function(e) {
    e.preventDefault();
    $("#certifications").trigger("prev.owl.carousel");
});

// success stories
$('#stories').owlCarousel({
    loop:true,
    nav:false,
    smartSpeed: 1000,
    stagePadding: 0,
    margin: 0,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// our happy clients slider 
$('#clients').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    smartSpeed: 800,
    stagePadding: 0,
    margin: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// adding a custom navs

$("#clients-left").click(function(e) {
    e.preventDefault();
    $("#clients").trigger("next.owl.carousel");
});
$("#clients-right").click(function(e) {
    e.preventDefault();
    $("#clients").trigger("prev.owl.carousel");
});

// our team slider 
$('#team').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    smartSpeed: 800,
    stagePadding: 0,
    margin: 20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
// adding a custom navs for our team membrs slider

$("#member-left").click(function(e) {
    e.preventDefault();
    $("#team").trigger("next.owl.carousel");
});
$("#member-right").click(function(e) {
    e.preventDefault();
    $("#team").trigger("prev.owl.carousel");
});


// about us page certificate slider 
// our team slider 
$('#aboutCert').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    smartSpeed: 800,
    stagePadding: 0,
    margin: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$("#aboutRightNav").click(function(e) {
    e.preventDefault();
    $("#aboutCert").trigger("next.owl.carousel");
});
$("#aboutLeftNav").click(function(e) {
    e.preventDefault();
    $("#aboutCert").trigger("prev.owl.carousel");
});

/********** activating carousel sliders ********* */

// activating aos
$(document).ready(function () {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
    });
  })



// activating fancy box
$(".certifcate-gallery").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	600, 
    'speedOut'		:	200, 
    'overlayShow'	:	false
});

// triggering counter 
var counter = function() {
    $(".info-counter").waypoint(function(direction) {
      var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
  
      $(".number").each(function() {
        var $this = $(this),
            num = $this.data("number");
      
        $this.animateNumber({
          number:num,
          numberStep: comma_separator_number_step
        }, 3000)
      });
    } , { offset: '95%' } )
  }
  counter();

})



// nav bar dropdown 
$(document).ready(function() {
    $("#drop-li").click(function(e) {
        e.preventDefault();
        //$(".dropdown").css({"opacity": "1","visibility":"visible"});
        $(this).toggleClass("activated");
    })
})

// wow activated here
new WOW().init();

// toggling active class depend on url

var activeNav = function() {
    var current = location.pathname;
    $('#activeClass li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').lastIndexOf(current) !== -1){
            $this.addClass('active');
            console.log(`we did find ${current}`)
        } else {
            console.log(`we didn't find ${current}`)
        }
    })
}
activeNav();

$("#submitComment").submit()