$(document).ready( function() {

	var width = $(window).width();
	if (width < 750) {
		$("#navToggle").css("display","block");
		$("#navToggle2").css("display", "block");
		$("nav").hide();
		$("nav.nav2").hide();

	}

	$("#navToggle").click( function() { 
		$("nav").slideToggle(500);
	});

	$("#navToggle2").click( function() { 
		$("nav.nav2").slideToggle(500);
	});

});