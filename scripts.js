console.log("hello world!");

$('.bodytext').removeClass('hide');
$('.bodytext').addClass('animated fadeInRight');

$('.one').hover(function () {
        $('.one').removeClass('animated bounceIn');
        $('.one').addClass('animated hinge');

});

$('.two').hover(function () {
        $('.two').removeClass('animated bounceIn');
        $('.two').addClass('animated hinge');

});

$('.three').hover(function () {
        $('.three').removeClass('animated bounceIn');
        $('.three').addClass('animated hinge');

});

$('.four').hover(function () {
        $('.four').removeClass('animated bounceIn');
        $('.four').addClass('animated hinge');

});

$('.five').hover(function () {
        $('.five').removeClass('animated bounceIn');
        $('.five').addClass('animated hinge');

});

$('.six').hover(function () {
        $('.six').removeClass('animated bounceIn');
        $('.six').addClass('animated hinge');

});

$(window).scroll(function () {
        $('.one').removeClass('animated hinge');
        $('.one').addClass('animated bounceIn');
});

$(window).scroll(function () {
        $('.two').removeClass('animated hinge');
        $('.two').addClass('animated bounceIn');
});

$(window).scroll(function () {
        $('.three').removeClass('animated hinge');
        $('.three').addClass('animated bounceIn');
});

$(window).scroll(function () {
        $('.four').removeClass('animated hinge');
        $('.four').addClass('animated bounceIn');
});

$(window).scroll(function () {
        $('.five').removeClass('animated hinge');
        $('.five').addClass('animated bounceIn');
});

$(window).scroll(function () {
        $('.six').removeClass('animated hinge');
        $('.six').addClass('animated bounceIn');
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.title').addClass('animated hinge');

        $(window).scroll(function () {
                $('.title').addClass('animated bounceIn');
        });
}