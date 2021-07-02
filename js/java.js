// $('.page-scroll').on('click', function(event){
//     event.preventDefault();

//     var tujuan = $(this).attr('href');

//     var elemenTujuan = $(tujuan);

//     $('body').animate({
//         scrollTop: elemenTujuan.offset().top - 50
//     },1250, 'swing');

// });

// Smoth Scrolling
$(document).ready(function () {

    var scrollLink = $('.page-scroll');

    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 1050, 'easeInOutQuint')
    })
});


// Parallax 

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.5 + '%)'
    });

});