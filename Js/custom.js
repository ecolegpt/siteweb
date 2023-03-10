jQuery(function ($) {
    "use strict";

    /* Scroll Function
    ============================================== */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
		   $('#header .navbar').addClass('header-fix');
		} else {
		   $('#header .navbar').removeClass('header-fix');
		}
	});
	$(".left-menu").on('click', function() {
		$(".left-side").toggleClass("active-left-menu");
	});
	$(".right-menu").on('click', function() {
		$(".right-side").toggleClass("active-right-menu");
	});
});


