$(document).ready(function() {
  
  $(".animsition").animsition({

  // inClass               :   'fade-in-right',
  outClass              :   'fade-out-right',
  // inDuration            :    1500,
  outDuration           :    800,
  linkElement           :   '.animsition-link',
  loading               :    true,
  loadingParentElement  :   'body',
  loadingClass          :   'animsition-loading',
  unSupportCss          : [ 'animation-duration',
                    '-webkit-animation-duration',
                    '-o-animation-duration'
                  ],
  overlay               :   false,

  overlayClass          :   'animsition-overlay-slide',
  overlayParentElement  :   'body'
  });
});