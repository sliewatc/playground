function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function randomColor(brightness){
    function randomChannel(brightness){
        var r = 255-brightness;
        var n = 0|((Math.random() * r) + brightness);
        var s = n.toString(16);
        return (s.length===1) ? '0'+s : s;
    }
    return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

$('document').ready(function () {
    setTimeout(removeOverlay, 2000);
    function removeOverlay() {
        $('.overlay').fadeOut('slow');
    }
    for (i = 0; i < 40; ++i) {
        $('.visualizer ul').append("<li></li>");
    }

    $('.logo').click(function() {
        $('#floater').stop().remove();
        imBored(100);
    });

    $('.visualizer ul li').each(function() {
        $(this).data('open', false);
        var color = randomColor(70);
        var width = randomIntFromInterval(10, 100);
        $(this).css('width', width + "%");
        $(this).css('background-color', color);
        var curText = getText();
        console.log(curText);
        $(this).data('text', curText);



    }).click(function() {
        if ($(this).data('open') === false) {
            $('.expand-body').fadeIn(400);
            $('#text').text($(this).data('text'));
            $(this).data('open', true);
            $(this).siblings().removeClass('opened').css('height', '2.5%').data('open',false);
            $(this).css('height', '4%');

            setTimeout(scroller($(this)), 1000);

            function scroller(el) {
                el.addClass('opened');
                $('.visualizer ul').animate({
                    scrollTop: (el.offset().top) + 2
                }, 400);
                $('.visualizer ul').css({
                    'overflow-y': 'hidden',
                    height: '100vh'
                });

            }
        } else {
            $('.expand-body').fadeOut(100);
            $(this).data('open', false);
            $(this).removeClass('opened');
            $(this).css('height', '2.5%');
            $('.visualizer ul').css({
                height: '100vh'
            });
        }
    }).hover(function() {
        var el = $(this);
        el.addClass('active');
        for (var j = 0; j < 3; j++) {
            el.nextAll().eq(j).addClass('active' + j);
            el.prevAll().eq(j).addClass('active' + j);
        }
    }, function() {
        var el = $(this);
        el.removeClass('active');
        for (var j = 0; j < 3; j++) {
            el.nextAll().eq(j).removeClass('active' + j);
            el.prevAll().eq(j).removeClass('active' + j);
        }
    });

});

//Let r be radius in terms of vw
function imBored(r) {
    $('.page-tv').append("<div id='floater' height="+ r +"></div>");
    $('#floater').css('background-color', randomColor(50));
    $('.logo').css('pointer-events', 'none');
    var run = setInterval(frame, 1000 / 100);
    var height = r;

    function frame() {
        if (height <= -1) {
            clearInterval(run);
            $('.logo').css('pointer-events', 'all');
        } else  {
            height = height - 1;
            $('#floater').css('height', height + "vh");
        }
    }

}

function getText() {
    var text = Math.random().toString(36).substring(7);
    return text;
}

