document.addEventListener("scroll", function () {
    var log = console.log;
    var scrollpos = window.scrollY;
    var nav = document.getElementById("navigation");
    // scrollpos = window.scrollY;

    if (scrollpos > 10) {
        log('GET 10')
        // nav.style.backgroundColor = 'black';
        // nav.classList.remove("bg-white");
        // nav.classList.add("bg-black");
    } else {
        log('Less than 10')
        // nav.classList.remove("bg-black");
        // nav.classList.add("bg-white");
    }
});