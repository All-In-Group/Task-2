$(document).ready(function(){
	
	
	setTimeout(function(){
	   $('.wrap-loader').hide();
	}, 5000);


	$(document).on('click', '.navbar-nav>li>a[href^="#"]', function(e) {
	    let id = $(this).attr('href');
	    let $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }
	    e.preventDefault();
	    let pos = $id.offset().top;

	    $('body, html').animate({scrollTop: pos});
	});

	
     
     $('.slick-slider').slick({
     	slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
     });
     $('.slick-arrow').hide();

	window.onscroll = function() {fixing_navbar()};

	function fixing_navbar (){
		let header = $(".navbar");
		let windowHeight = window.pageYOffset;
		
		if (windowHeight > 0) {
		   header.addClass("navbar-fixed");
		} else {
		   header.removeClass("navbar-fixed");
		}
	}


});



