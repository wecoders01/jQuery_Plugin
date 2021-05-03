(function ($) {
    "use strict";
    
    $("#zoom_01").elevateZoom({
        zoomWindowWidth:300,
        zoomWindowHeight:300
    });

    $("#zoom_02").elevateZoom({
        tint:true, 
        tintColour:'#F90', 
        tintOpacity:0.5,
        zoomWindowWidth:300,
        zoomWindowHeight:300
    });

    $("#zoom_03").elevateZoom({
        zoomType				: "lens",
        lensShape : "round",
        lensSize    : 200
      });


      //initiate the plugin and pass the id of the div containing gallery images
$("#zoom_04").elevateZoom({
    zoomWindowWidth: 300,
    zoomWindowHeight: 200,
    gallery:'gallery_04', 
    cursor: 'pointer', 
    galleryActiveClass: 'active', 
    imageCrossfade: true, 
    loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
}); 

//pass the images to Fancybox
$("#zoom_04").bind("click", function(e) {  
  var ez =   $('#zoom_04').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});


})(jQuery);