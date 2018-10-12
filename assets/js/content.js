'use strict';

$(document).ready(function () {
    console.log('Content loaded');
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: -250,
        mobile: true,
        callback: function callback(box) {
            // console.log(box);
        },
        scrollContainer: null
    });
    wow.init();
});