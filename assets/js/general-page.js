$(document).ready(function () {

    $(window).resize(function () {
        var w_height = $(this).height(),
            g_height = $('#general').outerHeight();
        $('.height').css({'height':w_height});
        $('.g-height').css({'height':g_height});
    });
    $(window).trigger('resize');

    function responsive_image() {
        $.each($('.responsive-image'), function () {
            var image = $(this).attr('data-image');
            $(this).parent().css({'background-image':'url("'+image+'")'});
        })
    }

    responsive_image();

    window.sliderNumber = 1;
    window.currentContent = '<a href="transneft-content.html"><img src="assets/img/general-page/transneft.svg" alt="Транснефть"></a>';
    window.currentLink = 'transneft-content.html';

    (function () {
        var slide_1 = $('.slide-1'),
            slide_3 = $('.slide-3');
        $('.slider').append("<div class='slide-clone-bottom'>"+slide_1.html()+"</div>");
        $('.slider').append("<div class='slide-clone-left'>"+slide_3.html()+"</div>");
        $('.current-content').html(window.currentContent);
        $('.get-more').attr({'href':window.currentLink});
    })();

    function setActiveElement() {
        $('.slider-btn').removeClass('active');
        $('.slider-btn[data-number='+window.sliderNumber+']').addClass('active');
    }

    $(this)
        .on('click','.slider-btn',function () {
            var even = $(this),
                cur = even.attr('data-number');

            if(window.sliderNumber !== cur){
                var moveSlider = setInterval(function () {
                    $('.slider-next').click();
                    if(window.sliderNumber === cur){
                        clearInterval(moveSlider);
                    }
                },350)
            }
        })
        .on('click','.slider-next, .slide-2', function () {
            var slide_1 = $('.slide-1'),
                slide_2 = $('.slide-2'),
                slide_3 = $('.slide-3'),
                slideCloneBottom = $('.slide-clone-bottom'),
                slideCloneLeft = $('.slide-clone-left');

            slide_1.addClass('move_left');
            slideCloneBottom.toggleClass('slide-3 slide-clone-bottom');
            slideCloneLeft.html(slide_1.html());
            slide_2.toggleClass('slide-2 slide-1');
            slide_3.toggleClass('slide-3 slide-2');

            setTimeout(function () {
                slide_1.remove();
            },300);

            window.sliderNumber = slide_2.find('>*').attr('data-slide');
            window.currentContent = slide_2.find('.slide-content');
            window.currentLink = slide_2.find('>*').attr('data-link');
            $('.get-more').attr({'href':window.currentLink});

            $('.current-content').html(window.currentContent.html());

            setActiveElement();

            $('.slider').append("<div class='slide-clone-bottom'>"+slide_2.html()+"</div>");

            responsive_image();
        })
        .on('click','.slider-prev, .slide-3', function () {
            var slide_1 = $('.slide-1'),
                slide_2 = $('.slide-2'),
                slide_3 = $('.slide-3'),
                slideCloneBottom = $('.slide-clone-bottom'),
                slideCloneLeft = $('.slide-clone-left');

            slide_3.addClass('move_bottom');
            slideCloneLeft.toggleClass('slide-1 slide-clone-left');
            slideCloneBottom.html(slide_3.html());
            slide_2.toggleClass('slide-2 slide-3');
            slide_1.toggleClass('slide-1 slide-2');

            setTimeout(function () {
                slide_3.remove();
            },300);

            window.sliderNumber = slide_3.find('>*').attr('data-slide');
            window.currentContent = slide_3.find('.slide-content');
            window.currentLink = slide_3.find('>*').attr('data-link');
            $('.get-more').attr({'href':window.currentLink});

            $('.current-content').html(window.currentContent.html());

            setActiveElement();

            $('.slider').append("<div class='slide-clone-left'>"+slide_2.html()+"</div>");

            responsive_image();
        });

    // mobile

    var firsts = [{
        'hash': 'transneft',
        'name': '<a href="transneft-content.html"><img src="assets/img/general-page/transneft.svg" alt="Транснефть"></a>'
    }, {
        'hash': 'people',
        'name': '<a href="mendeleev.html">Люди</a>'
    }, {
        'hash': 'tubes',
        'name': '<a href="tube-1.html">Трубы</a>'
    }];

    function currentFirst(num) {
        var item_content = $('.item-content');
        console.log(num)
        item_content.find('.mobile-content').html(firsts[num].name);
        item_content.find('.mobile-get-more').attr({'href':'/'+firsts[num].hash+'.html'});
    }

    var owl = $('#general');
    owl.owlCarousel({
        loop: true,
        autoplay: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-arrow-left">','<i class="fa fa-arrow-right">']
    });
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        setTimeout(function () {
            $.each($('.owl-item'),function () {
                if($(this).hasClass('active')){
                    var index = $(this).find('.item').attr('data-index');
                    currentFirst(index);
                }
            })
        },50)
    });

    $(this).on('click', '.top-btn', function () {
        $('body').addClass('preview-hidden');
    });


    // определяем направление скролла и добавляем класс
    $(document).on("wheel", function(e) {
        var scrolling = false;
        if (!scrolling) {
            if (e.originalEvent.deltaY < 0) {
                // console.log("scroll_up");
            } else {
                // console.log("scroll_dawn");
                $('body').addClass('preview-hidden');
            }
        }
    });

    if (window.location.href.split('#')[1] === 'close-preview') {
        $('body').addClass('preview-hide');
    }


});