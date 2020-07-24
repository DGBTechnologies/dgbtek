// JavaScript Document

$(document).ready(function () {
	"use strict";

//		$(window).on("load", function() {
//	    $.fakeLoader('spinner3');
//	  });


	// $(window).resize(function () {
	// 	// This will fire each time the window is resized:
	// 	if ($(window).width() >= 990) {
	// 		$(window).on("scroll", function () {
	// 			if ($(window).scrollTop() >= 20) {
	// 				$(".navbar").addClass("compressed");
	// 				$(".nav-link").addClass("compressed");
	// 				$(".nav-link.active").addClass("compressed");
	// 				$('.navbar .navbar-brand img').attr('src','images/dgb-logo.png');
	// 			} else {
	// 				$(".navbar").removeClass("compressed");
	// 				$(".nav-link").removeClass("compressed");
	// 				$(".nav-link.active").removeClass("compressed");
	// 				$('.navbar .navbar-brand img').attr('src','images/dgb-logo.png');
	// 			}
	// 		});
	// 	} else {
	// 		//yo
	// 	}
	// }).resize();

	//$(".navbar").addClass("animated fadeInDown delay-0.4s");
	//$(".carousel-item h1").addClass("animated flipInX delay-0.8s");
	
	
// 	$(window).scroll(function () {
// 		var height = $(window).scrollTop();
// 		if (height > 100) {
// 			$(".services-header h3").addClass("animated fadeInRight delay-0.9s");
// 			$(".services-header .divider-line").addClass("animated fadeInRight delay-0.9s");
// 			$(".services-header p").addClass("animated fadeInRight delay-1.3s");
// 		}
// 		if (height > 290) {
// 			$("#our-services .card").addClass("animated flipInX delay-1.2s");
// 		}
// 		if (height > 840) {
// 			$(".carousel-caption h1").addClass("animated fadeInUp delay-1.2s"); 
// 		}
// 		if (height > 1650) {
// 			$("#our-leadership .row .col-sm").addClass("animated fadeInUp delay-1.2s"); 
// 		}
// //		if (height > 2300) {
// //			$("#contact .row .col-sm").addClass("animated zoomInUp delay-0.2s"); 
// //		}
// 	});

	
	  

	  $(".readmore-btn").on('click',function(){
		$(this).parent().parent().toggleClass("showContent");
		if (($(this).parent().parent().hasClass("showContent"))){
		  $(this).text("Less ");
		  $(this).append(`<svg width="1.5em" height="1.5em" viewBox="0 4 18 10"  class="bi bi-arrow-up-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
			<path fill-rule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
			<path fill-rule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>
		  </svg>`)
		}
		else {
			$(this).text("More ");
		  $(this).append(`<svg width="1.5em" height="1.5em" viewBox="0 4 18 10" class="bi bi-arrow-down-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		   <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
			<path fill-rule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"></path>
			<path fill-rule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"></path>
		  </svg>`)
		}
      })


	// read more/ read less javascript
	




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
