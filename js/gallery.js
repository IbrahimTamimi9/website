var slider;

$(document).ready(function(){
    /* create slider */
    slider = $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 10000,
        slideMargin: 0,
        moveSlides: 1,
        easing: 'ease-in-out',
        speed: 1000,
        mode: 'horizontal',
        responsive: true,
        adaptiveHeight: false,
        controls: false,
        touchEnabled: false
    });
    
    /* do not display slides at small screens that are only used for large screens */
    el = $('.gallery-element-wrapper.gallery-desktop-item');
    comment = document.createComment(el.get(0).outerHTML);
    lastWindowWidth = $(window).width();
    /*if(lastWindowWidth <= 767){
        el.replaceWith(comment);
        slider.reloadSlider();
    }*/
    
    $(window).on("orientationchange load resize", function () {
        gallery_resize();
    });
});

function gallery_slide(s){
    /* TODO: https://github.com/TeamNewPipe/website/issues/22 */
    //slider.goToSlide(s);
}

function gallery_resize(){
    el = $('.gallery-element-wrapper.gallery-desktop-item');
    /* TODO: https://github.com/TeamNewPipe/website/issues/22 */
    /* small screens */
    /*if($(window).width() <= 767 && lastWindowWidth > 767){
        lastWindowWidth = $(window).width();
        el.replaceWith(comment);
        slider.reloadSlider({
            startSlide: (slider.getCurrentSlide() == 0) ? slider.getCurrentSlide() : slider.getCurrentSlide() - 1,
            adaptiveHeight: true
        });
    }
    
    /* medium and large screens */
   /* else if($(window).width() > 767 && lastWindowWidth <= 767) {
        lastWindowWidth = $(window).width();
        $(comment).parent().prepend(comment.nodeValue);
        $(comment).remove();
        slider.reloadSlider({
            startSlide: (slider.getCurrentSlide() + 1)
        });
    }
    
    /* prevent template's bug, which does not allow responsive behavior in some browsers */
    //else {
        slider.reloadSlider({
            controls: false,
            startSlide:slider.getCurrentSlide(),
            touchEnabled: false
        });
    //}
}

/* Bootstrap 3 collapse function has some bugs wich cause ugly toggles */
var visibleDescription = null;

function collapseDescription(dest) {
    if($(window).width() <= 543) {
        if($(dest).css('display') == 'none'){
            $('.text .description-text').hide();
            $(dest).show();
            visibleDescription = $(dest);
        }
        else {
            $(dest).hide();
            visibleDescription = null;
        }
    }
}
$(window).on("load orientationchange resize", function () {
    if($(window).width() > 543){
        $('.text .description-text').show();
    }
    else {
        $('.text .description-text').hide();
        visibleDescription = null;
    }
    if(visibleDescription != null) 
        $(visibleDescription).show();
});