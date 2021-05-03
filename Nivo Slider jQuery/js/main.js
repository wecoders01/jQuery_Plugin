(function ($) {
    "use strict";
    
    $('#main-slider').nivoSlider({
        animSpeed: 500,
        slices: 18,
        startSlide: 0,
        pauseTime: 5000,
        pauseOnHover: false,
		manualAdvance: false,
        controlNav: true,
        directionNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });

    new WOW ().init();

})(jQuery);



// effect: 'boxRainGrowReverse',
// slices: 15,
// boxCols: 8,
// boxRows: 4,
// animSpeed: 500,
// pauseTime: 3000,
// startSlide: 0,
// directionNav: true,
// controlNavThumbs: false,
// pauseOnHover: true,
// manualAdvance: false