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
	var worksTop = jQuery('#works').offset().top-280;
	var contactTop = jQuery('#contact').offset().top+240;

	
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
	if(width<750){
		var aboutTop = jQuery('#about').offset().top-40;
		var worksTop = jQuery('#works').offset().top-20;
		var contactTop = jQuery('#contact').offset().top+180;

		
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

		jQuery('.top').removeClass('hide');
	}else{
		jQuery('.top').addClass('hide');
	}

	if(width<1100){
		jQuery('.phone-description-half1').css("display", "inline-block");
	}else{
		jQuery('.phone-description-half1').css("display", "none");
	}
});