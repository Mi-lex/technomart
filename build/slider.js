'use strict';

(function slider() {
  var slideBar = document.querySelector('.sl_bar'),
      slides = slideBar.querySelectorAll('.slide'),
      slideIndicators = slideBar.querySelectorAll('.indicator'),
      prevSlideBtn = slideBar.querySelector('.prev-slide'),
      nextSlideBtn = slideBar.querySelector('.next-slide'),
      slideNumb = 0;

  function showSlide(n) {
    if (n < 0) {
      slideNumb = slides.length - 1;
    } else if (n > slides.length - 1) {
      slideNumb = 0;
    }

    Array.prototype.forEach.call(slides, function (el, i) {
      el.style.display = 'none';
      slideIndicators[i].classList.remove('active');
    });

    slides[slideNumb].style.display = 'block';
    slideIndicators[slideNumb].classList.add('active');
  }

  function changeSlide(n) {
    showSlide(slideNumb += n);
  }

  function currentSlide(n) {
    if (n == slideNumb) return;
    showSlide(slideNumb = n);
  }

  prevSlideBtn.addEventListener('click', function () {
    changeSlide(-1);
  });

  nextSlideBtn.addEventListener('click', function () {
    changeSlide(1);
  });

  Array.prototype.forEach.call(slideIndicators, function (el, i) {
    el.addEventListener('click', function () {
      currentSlide(i);
    });
  });
})();