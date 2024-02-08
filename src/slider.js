// #region UPDATED SLIDER
// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// let slidePosition = 0;
// const slides = document.querySelectorAll('.slider img');
// const totalSlides = slides.length;

// prevButton.addEventListener('click', () => {
//     moveToPrevSlide();
// });

// nextButton.addEventListener('click', () => {
//     moveToNextSlide();
// });

// function updateSlidePosition() {
//     slider.style.transform = `translateX(-${slidePosition}px)`;
// }

// function moveToPrevSlide() {
//     if (slidePosition === 0) {
//         slidePosition = (totalSlides - 1) * slides[0].offsetWidth;
//     } else {
//         slidePosition -= slides[0].offsetWidth;
//     }
//     updateSlidePosition();
// }

// function moveToNextSlide() {
//     if (slidePosition === (totalSlides - 1) * slides[0].offsetWidth) {
//         slidePosition = 0;
//     } else {
//         slidePosition += slides[0].offsetWidth;
//     }
//     updateSlidePosition();
// }

// setInterval(moveToNextSlide, 3000);
// #endregion

// #region OLD SLIDER
// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// let slidePosition = 0;
// const slides = document.querySelectorAll('.slider img');
// const totalSlides = slides.length;

// prevButton.addEventListener('click', () => {
//     moveToPrevSlide();
// });

// nextButton.addEventListener('click', () => {
//     moveToNextSlide();
// });

// function updateSlidePosition() {
//     slider.style.transform = `translateX(-${slidePosition}px)`;
// }

// function moveToPrevSlide() {
//     if (slidePosition === 0) {
//         slidePosition = (totalSlides - 1) * slides[0].offsetWidth;
//     } else {
//         slidePosition -= slides[0].offsetWidth;
//     }
//     updateSlidePosition();
// }

// function moveToNextSlide() {
//     if (slidePosition === (totalSlides - 1) * slides[0].offsetWidth) {
//         slidePosition = 0;
//     } else {
//         slidePosition += slides[0].offsetWidth;
//     }
//     updateSlidePosition();
// }

// setInterval(moveToNextSlide, 3000);
// #endregion


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentIndex);

setInterval(nextSlide, 2000);