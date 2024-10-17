'use strict';

function showSlides(n) {
    const slides = document.querySelectorAll('.mySlides');

    if (n > slides.length) {
        // Si este ha sido última imagen, volvemos al primera
        slideIndex = 1;
    } else if (n < 1) {
        // Si este ha sido la primera imagen, vamos al última
        slideIndex = slides.length;
    }

    for (const slide of slides) {
        slide.style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides(slideIndex);