$(function() {

//video play button area js
    new VenoBox ({
        selector    : '.about_play',
    });

//counterUp js
    $('.counter').counterUp({
        delay   : .30,
        time    : 100,
    });

// mission play button area js
    new VenoBox ({
        selector    : '.mission_play_button',
    });

// sticky menu area js
$(window).on ('scroll', function(){
    let sticky = $ ( this ).scrollTop()
    if ( sticky > 100 ) {
        $('.navbar').addClass('sticky_menu')
    }

    else {
        $('.navbar').removeClass('sticky_menu')
    }
});

// scroll Top and bottom
$('#scroll_top_bottom_buttom').on ('click', function(){
    $('html,body').animate({scrollTop:0}, 2000)
});

$(window).on ('scroll', function(){
    var topbtn = $ (this).scrollTop()
    if ( topbtn > 300 ) {
        $('#scroll_top_bottom_buttom').fadeIn (100)
    }

    else {
        $('#scroll_top_bottom_buttom').fadeOut (100)
    }
})

})