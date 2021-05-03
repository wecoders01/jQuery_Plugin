(function ($) {
    "use strict";
    
    $(".ty_player").YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'.video-wrapper',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1, 
        showControls: false
    });


})(jQuery);