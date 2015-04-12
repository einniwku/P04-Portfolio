$(document).ready(function(){
 $(window).bind('scroll', function() {
 var navHeight = $( window ).height() - 550;
   if ($(window).scrollTop() > navHeight) {
     $('nav').addClass('fixed');
     $('nav.nav2').removeClass('fixed');
     $('.logo').removeClass('hide');
     $('nav').addClass('nav3');
     $('nav.nav2').removeClass('nav3');
     $('#about2').addClass('hide');
   }
   else {
     $('nav').removeClass('fixed');
     $('.logo').addClass('hide');
     $('nav').removeClass('nav3');
     $('nav.nav2').removeClass('nav3');
     $('#about2').removeClass('hide');
   }

    var width= $(window).width();
    if(width<600){
      var navHeight2=$(window).height()-150;
      if($(window).scrollTop()> navHeight2){
        $('#navToggle').css('margin-top', '0');
        $('#navToggle').removeClass('fixed');
      }
    }
});
});