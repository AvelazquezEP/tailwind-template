const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let slidePosition = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

prevButton.addEventListener('click', () => {
    moveToPrevSlide();
});

nextButton.addEventListener('click', () => {
    moveToNextSlide();
});

function updateSlidePosition() {
    slider.style.transform = `translateX(-${slidePosition}px)`;
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = (totalSlides - 1) * slides[0].offsetWidth;
    } else {
        slidePosition -= slides[0].offsetWidth;
    }
    updateSlidePosition();
}

function moveToNextSlide() {
    if (slidePosition === (totalSlides - 1) * slides[0].offsetWidth) {
        slidePosition = 0;
    } else {
        slidePosition += slides[0].offsetWidth;
    }
    updateSlidePosition();
}

// Timer functionality
setInterval(moveToNextSlide, 5000);