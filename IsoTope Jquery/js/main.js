(function ($) {
    "use strict";
    
//  Start IsoTope
$('#portfolio-grid').imagesLoaded(function () {
    // Start Init Isotope
    var $grid = $('#portfolio-grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    });
    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    // End IsoTope
});
//  End Init IsoTope





    
})(jQuery);