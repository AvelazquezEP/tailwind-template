window.onscroll = function (e) {
    var scrolldown = window.screenY;

    const log = console.log;

    log(window.scrollY);

    document.getElementById('navigation');

    if (scrolldown >= 201) {
        log('GET 150 PX');
    } else {
        log('DONT GET 150 PX')
    }
};
