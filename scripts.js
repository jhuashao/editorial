console.log("hello world!");

$('.bodytext').removeClass('hide');
$('.bodytext').addClass('animated fadeInRight');

$('.title').hover(function () {
        $('.title').removeClass('animated bounceIn');
        $('.title').addClass('animated hinge');

});

$(window).scroll(function () {
        $('.title').removeClass('animated hinge');
        $('.title').addClass('animated bounceIn');

       
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.title').addClass('animated hinge');

        $(window).scroll(function () {
                $('.title').addClass('animated bounceIn');
        });
}