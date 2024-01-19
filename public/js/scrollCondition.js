document.addEventListener("scroll", function () {
    var log = console.log;
    var scrollpos = window.scrollY;
    var nav = document.getElementById("navigation");
    var mediaTop = document.getElementById("mediaTop");
    // scrollpos = window.scrollY;

    if (scrollpos > 10) {
        log('GET 10')
        // nav.style.backgroundColor = 'black';
        // nav.classList.remove("bg-white");
        // nav.classList.add("bg-black");
        // mediaTop.classList.add("d-none");
    } else {
        log('Less than 10')
        // mediaTop.classList.remove("d-none");
        // nav.classList.remove("bg-black");
        // nav.classList.add("bg-white");
    }
});