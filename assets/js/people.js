$(document).ready(function () {

    $(window).resize(function () {
        var w_height = $(this).height();
        $('.height').css({'height':w_height});
    });
    $(window).trigger('resize');

    var firsts = [{
        'hash': 'mendeleev',
        'name': 'Дмитрий Менделеев',
        'text': '<p>Русский ученый Д. И. Менделеев первым в мире предложил использовать трубопроводы для транспортировки нефти.</p>'
    }, {
        'hash': 'shukhov',
        'name': 'Владимир Шухов',
        'text': '<p>Советский архитектор обессмертил себя задолго до создания башни, придумав первый в мире проект трубопровода.</p>'
    }, {
        'hash': 'nobel',
        'name': 'Людвиг и Альфред Нобель',
        'text': '<p>Как братья Нобель оказались в России и создали в Новороссийске первое предприятие по перевалке нефти.</p>'
    }, {
        'hash': 'shukin',
        'name': 'Николай Щукин',
        'text': '<p>Первый российский керосинопровод Баку — Батуми строили 10 лет под руководством профессора Н. Л. Щукина.</p>'
    }];

    function currentFirst(num, data) {
        var item_content = $('.item-content');

        item_content.find('.top').attr({'class':'top'}).addClass(data);
        item_content.find('.top').attr({'href':firsts[num].hash + '.html'});
        item_content.find('.image').attr({'class':'pull-left image'}).addClass(data);
        item_content.find('.image').attr({'href':firsts[num].hash + '.html'})
        item_content.find('.name span').html(firsts[num].name);
        item_content.find('.name').attr({'href':firsts[num].hash + '.html'});
        item_content.find('.get-more').attr({'href':'/'+firsts[num].hash+'.html'});
        item_content.find('.text').html(firsts[num].text);
    }

    var owl = $('#people');
    owl.owlCarousel({
        loop: true,
        autoplay: false,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-arrow-left">','<i class="fa fa-arrow-right">'],
        URLhashListener:true
    });
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        setTimeout(function () {
            $.each($('.owl-item'),function () {
                if($(this).hasClass('active')){
                    var hash = $(this).find('.item').attr('data-hash'),
                        index = $(this).find('.item').attr('data-index');

                    $('.slider-btn').removeClass('active');
                    $('.slider-btn[href="#'+hash+'"]').addClass('active');

                    currentFirst(index, hash);
                }
            })
        },50)
    });

    $('.slider-btn').click(function () {
        setTimeout(function () {
            history.pushState(null, '', window.location.pathname)
        },20)
    });
});