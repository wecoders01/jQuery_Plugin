(function ($) {
    "use strict";
    
    // / Start Feature Product Carousel
    $('.thumb-carousel').owlCarousel({
        loop: true,
        dots: false,
        thumbs: false,
        nav: true,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        autoplay: false,
                autoplayTimeout:1000,
            autoplayHoverPause:true,
        margin: 15,
        responsive: {
        0:{
            items:1
        },
        767:{
            items: 1
        },
        992:{
            items: 2
        },
        1200:{
            items: 4
        },
    },
    });

    $('.venobox').venobox({
        share: []
    }); 

    let activeTab = $('#thumbTab a').filter('.active');
        $('#thumbTab a').click(function(e) {
            e.preventDefault();

            activeTab.removeClass('active');
            $(activeTab.attr('href')).removeClass('active');

            activeTab = $(this);

            activeTab.addClass('active');
            $(activeTab.attr('href')).addClass('active');
        })


        $(".qtybtn").on("click", function() {
            var $btn = $(this),
                $oldValue = $btn.parent().find("input").val();
            if ($btn.text() == "+") {
                var $newVal = parseFloat($oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if ($oldValue > 1) {
                    var $newVal = parseFloat($oldValue) - 1;
                } else {
                    $newVal = 1;
                }
            }
            $btn.parent().find("input").val($newVal);
        });



})(jQuery);