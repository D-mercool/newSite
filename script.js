//Слайдер
window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let slideIndex = 1; //Переменная отвечает за тот слайд, к-ый показывается на странице
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); //Скрыли все слайды
        /*for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }*/
        dots.forEach((item) => item.classList.remove('dot-active')); // удалили класс у точек

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }


    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 1; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //Кнопки для Доставки

    let arrow1 = document.querySelector('.btn-arrow1');
    let arrow2 = document.querySelector('.btn-arrow2');
    let liArrow1 = document.getElementsByClassName('li-arrow1');
    let liArrow2 = document.getElementsByClassName('li-arrow2');
    let tb = document.querySelector('.car');
    let dText = document.querySelector('.delivery-text');
    let count1 = 1;
    let count2 = 1;

    tb.style.display = 'none';
    dText.style.display = 'none';

    arrow1.addEventListener('click', function() {
        if (count1 % 2 == 0) {
            tb.style.display = 'none';
            arrow1.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-down.svg');
            liArrow1[0].classList.remove('li-arrow-cl');
            count1 += 1;
        }
        else {
            tb.style.display = 'table';
            arrow1.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-up.svg');
            liArrow1[0].classList.add('li-arrow-cl');
            count1 += 1;
        }
    });

    arrow2.addEventListener('click', function() {
        if (count2 % 2 == 0) {
            dText.style.display = 'none';
            arrow2.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-down.svg');
            liArrow2[0].classList.remove('li-arrow-cl');
            count2 += 1;
        }
        else {
            dText.style.display = 'block';
            arrow2.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-up.svg');
            liArrow2[0].classList.add('li-arrow-cl');
            count2 += 1;
        }
    });

});