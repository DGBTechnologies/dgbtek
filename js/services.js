// JavaScript Document

$(document).ready(function () {
	"use strict";

//		$(window).on("load", function() {
//	    $.fakeLoader('spinner3');
//	  });
	
	$(window).resize(function () {
		// This will fire each time the window is resized:
		if ($(window).width() >= 990) {
			$(window).on("scroll", function () {
				if ($(window).scrollTop() >= 20) {
					$(".navbar").addClass("compressed");
					$(".nav-link").addClass("compressed");
					$(".nav-link.active").addClass("compressed");
				} else {
					$(".navbar").removeClass("compressed");
					$(".nav-link").removeClass("compressed");
					$(".nav-link.active").removeClass("compressed");
				}
			});
		} else {
			//yo
		}
	}).resize();

	$(".navbar").addClass("animated fadeInDown delay-0.4s");
	$(".carousel-item h1").addClass("animated fadeIn delay-0.6s");
	
	
//	$(window).scroll(function () {
//		var height = $(window).scrollTop();
//		if (height > 100) {
//			$(".services-header h3").addClass("animated fadeInRight delay-0.9s");
//			$(".services-header .divider-line").addClass("animated fadeInRight delay-0.9s");
//			$(".services-header p").addClass("animated fadeInRight delay-1.3s");
//		}
//		if (height > 290) {
//			$("#our-services .card").addClass("animated flipInX delay-1.2s");
//		}
//		if (height > 840) {
//			$(".carousel-caption h1").addClass("animated fadeInUp delay-1.2s"); 
//		}
//		if (height > 1650) {
//			$("#our-leadership .row .col-sm").addClass("animated flipInX delay-1.2s"); 
//		}
//		if (height > 2300) {
//			$("#contact .row .col-sm").addClass("animated zoomInUp delay-1.2s"); 
//		}
//	});




	//	$("nav ul li").find("a").click(function(e) {
	//    e.preventDefault();
	//    var section = $(this).attr("href");
	//    $("html, body").animate({
	//        scrollTop: $(section).offset().top + 680
	//    });
	//});

	//$("ul li a").find('a[href^="#"]').on('click', function(event) {
	//
	//    var target = $(this.getAttribute('href'));
	//
	//    if( target.length ) {
	//        event.preventDefault();
	//        $('html, body').stop().animate({
	//            scrollTop: target.offset('680').top
	//        }, 1000);
	//    }
	//
	//});

	//	$(".navbar-light .navbar-nav .our-services").click(function () {
	//		window.scroll({
	//			top: 680
	//		});
	//	});
	//		$(".navbar-light .navbar-nav .solutions").click(function () {
	//		window.scroll({
	//			top: 1080,
	//			left: 0,
	//			behavior: 'smooth'
	//		});
	//	});




	//	
	//	$(".nav-link").click(function() {
	//    $('html,body').animate({
	//        scrollTop: $("#our-services").offset().top},
	//        'slow');
	//	});


});
