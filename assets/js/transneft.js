$(document).ready(function () {

    $(window).resize(function () {
        var w_height = $(this).height();
        $('.height').css({'height':w_height});
    });
    $(window).trigger('resize');

    var owl = $('#transneft');
    owl.owlCarousel({
        loop: false,
        mouseDrag: false,
        touchDrag: false,
        autoplay: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-arrow-left">','<i class="fa fa-arrow-right">'],
        URLhashListener:true
    });
});