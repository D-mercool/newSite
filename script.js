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

    let arrow1 = document.querySelector('.btn-arrow1'),
    arrow2 = document.querySelector('.btn-arrow2'),
    arrow1_960px = document.querySelector('.btn-arrow1-960px'),
    arrow2_960px = document.querySelector('.btn-arrow2-960px'),
    liArrow1 = document.getElementsByClassName('li-arrow1'),
    liArrow2 = document.getElementsByClassName('li-arrow2'),
    liArrow1_960px = document.getElementsByClassName('li-arrow1-960px'),
    liArrow2_960px = document.getElementsByClassName('li-arrow2-960px'),
    tb = document.querySelector('.car'),
    dText = document.querySelector('.delivery-text'),
    tb_960px = document.querySelector('.car-960px'),
    dText_960x = document.querySelector('.delivery-text-960px'),
    count1 = 1,
    count2 = 1,
    count1_960px = 1,
    count2_960px = 1;

    tb.style.display = 'none';
    dText.style.display = 'none';
    
    tb_960px.style.display = 'none';
    dText_960x.style.display = 'none';

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

    arrow1_960px.addEventListener('click', function() {
        if (count1_960px % 2 == 0) {
            tb_960px.style.display = 'none';
            arrow1_960px.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-down.svg');
            liArrow1_960px[0].classList.remove('li-arrow-cl');
            count1_960px += 1;
        }
        else {
            tb_960px.style.display = 'table';
            arrow1_960px.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-up.svg');
            liArrow1_960px[0].classList.add('li-arrow-cl');
            count1_960px += 1;
        }
    });

    arrow2_960px.addEventListener('click', function() {
        if (count2_960px % 2 == 0) {
            dText_960x.style.display = 'none';
            arrow2_960px.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-down.svg');
            liArrow2_960px[0].classList.remove('li-arrow-cl');
            count2_960px += 1;
        }
        else {
            dText_960x.style.display = 'block';
            arrow2_960px.getElementsByTagName('img')[0].setAttribute('src', 'img/arrow-up.svg');
            liArrow2_960px[0].classList.add('li-arrow-cl');
            count2_960px += 1;
        }
    });

    ////////////////////////////////

    let btnTop = document.querySelector('.btn-gotop');
    btnTop.onclick = function() {
        window.scrollTo(pageXOffset, 0);
    };

    /////////////////////////////////////
});