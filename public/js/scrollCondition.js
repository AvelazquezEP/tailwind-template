// jQuery($ => {
//     $('body').scroll(function () {
//         var scroll = $(this).scrollTop();
//         $('.top-nav').toggleClass('blue', scroll >= 100);
//     });
// });

jQuery(document).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('#navigation').css({ "background": "red" });
    } else {
        jQuery('#navigation').css({ "background": "transparent" });
    }
});