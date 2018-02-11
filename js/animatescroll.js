$(window).scroll(function() {
    $('.mov').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+900) {
            console.log(123);
            $(this).addClass('fadeInLeft');
        }
    });
});