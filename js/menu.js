$(document).ready(function() {
    $('.menu').click(function(e) {
        e.stopPropagation();
        $(document.body).addClass('fixed');
        $('.overlay').addClass('overlay--open');
    });
    $('.close').click(function() {
        $(document.body).removeClass('fixed');
        $('.overlay').removeClass('overlay--open');
    });
    $('.menu_item').click(function() {
        $(document.body).removeClass('fixed');
        $('.overlay').removeClass('overlay--open');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});