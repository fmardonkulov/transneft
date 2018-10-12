$(document).on('click', 'a.share', function(e) {
    e.preventDefault();
    // if(typeof $(this).data('event') !== 'undefined') {
    //     ga('send', 'event', $(this).data('event'), $(this).data('param'));
    // }

    url = getShareUrl($(this));
    window.open(url,'','toolbar=0,status=0,width=626,height=436');

    return false;
});

function getShareUrl(obj) {
    if(obj.data('type') == 'vk') {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(obj.data('url'));
        url += '&title='       + encodeURIComponent(obj.data('title'));
        url += '&text='        + encodeURIComponent(obj.data('desc'));
        url += '&image='       + encodeURIComponent(obj.data('image'));
        url += '&noparse=true';
    } else if(obj.data('type') == 'fb') {
        url = 'https://www.facebook.com/sharer/sharer.php?';
        url += 'u=' + encodeURIComponent(obj.data('url'));
        url += '&title='     + encodeURIComponent(obj.data('title'));
        url += '&text='        + encodeURIComponent(obj.data('desc'));
        url += '&image='       + encodeURIComponent(obj.data('image'));
    } else if(obj.data('type') == 'ok') {
        url  = 'http://www.ok.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments='  + encodeURIComponent(obj.data('desc'));
        url += '&st._surl='     + encodeURIComponent(obj.data('url'));
    }

    return url;
}