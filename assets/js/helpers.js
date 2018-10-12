'use strict';

$(document).ready(function () {
    console.log('ready');
    // $('.toggle-menu').click(function (e) {
    //     e.preventDefault()
    //     const iconOpen = $(this).children('i.fa-bars')
    //     const iconClose = $(this).children('i.fa-times')
    //     const hiddenMenu = $('.hidden-menu')
    //     iconOpen.toggleClass('now-active')
    //     iconClose.toggleClass('now-active')
    //     hiddenMenu.toggleClass('hidden')
    // });
});

$(window).on('resize', function () {
    console.clear();
    console.group('Dimensions');
    console.log('width: ', width());
    console.log('height: ', height());
    console.groupEnd();
});

var width = function width() {
    return window.innerWidth > 0 ? window.innerWidth : screen.width;
};
var height = function height() {
    return window.screen.availHeight > 0 ? window.screen.availHeight : window.screen.height;
};

// share buttons
$('.social-block a').click(function (e) {
    e.preventDefault();
    var url = getShareUrl($(this));
    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    return false;
});
function getShareUrl(_obj) {
    var url = void 0;
    if (_obj.data('type') == 'vk') {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(_obj.data('url'));
        url += '&title=' + encodeURIComponent(_obj.data('title'));
        url += '&text=' + encodeURIComponent(_obj.data('desc'));
        url += '&image=' + encodeURIComponent(_obj.data('image'));
        url += '&noparse=true';
    } else if (_obj.data('type') == 'fb') {
        url = 'https://www.facebook.com/sharer/sharer.php?';
        url += 'u=' + encodeURIComponent(_obj.data('url'));
        url += '&title=' + encodeURIComponent(_obj.data('title'));
    } else if (_obj.data('type') == 'ok') {
        url = 'http://www.ok.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(_obj.data('desc'));
        url += '&st._surl=' + encodeURIComponent(_obj.data('url'));
    } else if (_obj.data('type') == 'tw') {
        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(_obj.data('title'));
        url += '&url=' + encodeURIComponent(_obj.data('url'));
        url += '&counturl=' + encodeURIComponent(_obj.data('url'));
    } else if (_obj.data('type') == 'tg') {
        url = 'https://telegram.me/share/url?';
        url += 'text=' + encodeURIComponent(_obj.data('title'));
        url += '&url=' + encodeURIComponent(_obj.data('url'));
        url += '&counturl=' + encodeURIComponent(_obj.data('url'));
    }
    return url;
}