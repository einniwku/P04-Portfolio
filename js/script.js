$(document).ready(function(){

	$('a#logo').click(function(){
		$('html, body').animate({ scrollTop: $('body').offset().top-270}, 'slow');
		$('a.about-nav').removeClass('is-selected');
		$('a.works-nav').removeClass('is-selected');
		$('a.contact-nav').removeClass('is-selected');
	})
});

jQuery(document).ready(function(){
	var aboutTop = jQuery('#about').offset().top-270;
	var worksTop = jQuery('#works').offset().top-240;
	var contactTop = jQuery('#contact').offset().top+100;

	
	jQuery('.about-nav').click(function(){
		jQuery('html, body').animate({scrollTop:aboutTop}, 'slow');
		return false;
	});

	jQuery('.works-nav').click(function(){
		jQuery('html, body').animate({scrollTop:worksTop}, 'slow');
		return false;
	});

	jQuery('.contact-nav').click(function(){
		jQuery('html, body').animate({scrollTop:contactTop}, 'slow');
		return false;
	});

	var width= $(window).width();
	if(width<600){
		var aboutTop = jQuery('#about').offset().top-40;
		var worksTop = jQuery('#works').offset().top-20;
		var contactTop = jQuery('#contact').offset().top+100;

		
		jQuery('.about-nav').click(function(){
			jQuery('html, body').animate({scrollTop:aboutTop}, 'slow');
			return false;
		});

		jQuery('.works-nav').click(function(){
			jQuery('html, body').animate({scrollTop:worksTop}, 'slow');
			return false;
		});

		jQuery('.contact-nav').click(function(){
			jQuery('html, body').animate({scrollTop:contactTop}, 'slow');
			return false;
		});
	}
});