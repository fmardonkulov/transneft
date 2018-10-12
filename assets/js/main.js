'use strict';

$(document).ready(function () {
    $('.toggle-menu').click(function (e) {
        e.preventDefault();
        var element = $(this).children('img.fa-bars');
        var condition = element.hasClass('now-active');
        toggleMenu();
        var action = condition ? showMenu() : hideMenu();
    });
    var toggleMenu = function toggleMenu() {
        var iconOpen = $('.toggle-menu').children('img.fa-bars');
        var iconClose = $('.toggle-menu').children('img.fa-times');
        iconOpen.toggleClass('now-active');
        iconClose.toggleClass('now-active');
        $('html').toggleClass('not-scrollable');
        $('body').toggleClass('not-scrollable');
    };
    var hideMenu = function hideMenu() {
        var hiddenMenu = $('.hidden-menu');
        hiddenMenu.fadeOut('fast', function () {
            hiddenMenu.addClass('hidden');
        });
    };
    var showMenu = function showMenu() {
        var hiddenMenu = $('.hidden-menu');
        hiddenMenu.fadeIn('fast', function () {
            hiddenMenu.removeClass('hidden');
        });
    };

    $.each($('.con'),function () {
        if($(this).hasClass('active')){
            var con = $(this).parent().find('.hidden-ul');
            $('.hidden-menu__content .right').html(con[0].outerHTML)
        }
    });




    $('.con').click(function () {
        var win_w = $(window).width();
        // $('.con').removeClass('active');
        var el = $(this);
        var con = el.parent().find('.hidden-ul');
        $('.hidden-menu__content .right').html(con[0].outerHTML);
        // if(win_w <768){ 
            if(el.hasClass("active") == false){
                $('.con').next(".hidden-ul").slideUp(500);
                el.next(".hidden-ul").slideDown(500);
                // console.log(el.attr("class"));
            }
        // }
        $('.con').removeClass('active');
        $(this).addClass('active');
       
        
    })


    $('.mobile-share-btn').click(function () {
        $(this).find('i').toggleClass('fa-share-alt fa-times');
        $('.mobile-share-btns').toggleClass('active');
    });
});