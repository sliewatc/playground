$('document').ready(function () {
    $('#menu-x-mob > button').on('click', function() {
        var menu = $('.menu-tv');
        menu.addClass('slidden');
    });
    $('#menu-x-full').click(function() {
        var menu = $('.menu-tv');
        menu.addClass('ridden');
    });
    $('.v2 #menu-nav').click(function() {
        var menu = $('.menu-tv');
        menu.removeClass('slidden ridden');
    });
    $('.menu-btn').click(function() {
        if ( $('.menu-tv').hasClass('slidden') || $('.menu-tv').hasClass('ridden') ) {
            $('#menu-nav h1').text('MENU');
        } else {
            $('#menu-nav h1').text('MENU');
        }
    });
});


