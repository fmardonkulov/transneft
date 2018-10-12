$(document).ready(function () {

    $(window).resize(function () {
        var w_height = $(this).height();
        $('.height').css({'height':w_height});
    });
    $(window).trigger('resize');

    var firsts = [{
        'hash': 'tube-1',
        'name': 'Артерия жизни',
        'text': '<p>Первая в мире женщина-водолаз проложила первый подводный бензопровод по дну Ладожского озера в 1942 году.</p>'
    }, {
        'hash': 'tube-2',
        'name': 'Горячая нефть',
        'text': '<p>Первый советский «горячий» нефтепровод построен в 1955 году.</p>'
    }, {
        'hash': 'tube-3',
        'name': 'Победила «дружба»',
        'text': '<p>Первые партии советской нефти по нефтепроводу «Дружба» пошли в Чехословакию в 1962 году.</p>'
    },{
        'hash': 'tube-4',
        'name': 'По синему морю',
        'text': '<p>Первый советский танкер «Лихославль» отправился в Италию из Новороссийска в 1964 году.</p>'
    },{
        'hash': 'tube-5',
        'name': 'Из Сибири с любовью',
        'text': '<p>Первый нефтепровод в Сибири протяженностью 410 км открыт в 1965 году.</p>'
    },{
        'hash': 'tube-6',
        'name': 'Умный Вентспилс обойдет',
        'text': '<p>Балтийская трубопроводная система — первый крупный магистральный нефтепровод постсоветского времени.</p>'
    },{
        'hash': 'tube-7',
        'name': 'Место назначения— Китай',
        'text': '<p>Первая российская нефть отправилась в Китай в 2011 году.</p>'
    }, {
        'hash': 'tube-8',
        'name': 'За полярным кругом',
        'text': '<p>Нефтепровод Заполярье — Пурпе — Самотлор протянулся на 919 километров.</p>'
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

    var owl = $('#tubes');
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