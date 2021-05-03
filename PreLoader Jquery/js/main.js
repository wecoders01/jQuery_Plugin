(function ($) {
    "use strict";

// PreLoad
    $(window).on('load', function () {
        $('#loading').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    })
// PreLoad
    
// Start Scroll Opacity
    var animation_start_pos = 0, animation_end_pos = 1000; //where you want the animation to stop

    $(document).scroll(function() {
        var scroll_pos = $(this).scrollTop(); 
            var percentScrolled = parseFloat(scroll_pos/animation_end_pos);
            jQuery('.people-opacity').css('opacity',  percentScrolled );
    });
// End Scroll Opacity


})(jQuery);