/*global $, alert, console */

$(function() {
	'use strict';
	
	// $('html').niceScroll();
	//$(".main-page").niceScroll();

	$('[data-toggle="tooltip"]').tooltip();

	$(".port").hover(
		function(){
		$(this).children().first().show(500);
		},
		function(){
		$(this).children().first().hide(500);
		}
	);
	$(".nav-tabs li").click(function(){
		// $(".side-page").css("height",$(".main-page").height());
	})

	
	// $(".side-page").css("height",$(".main-page").height());
	// $(".main-page").niceScroll();

});