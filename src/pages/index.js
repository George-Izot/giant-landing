import '../js/jquery.waterwheelCarousel'
import '../../node_modules/jquery/dist/jquery'
import './index.scss';
import 'bootstrap';
import '../../node_modules/slick-carousel/slick/slick';
import '../../node_modules/lity/dist/lity';
import './index.scss';


$(document).ready(function () {
    $("#carousel").waterwheelCarousel({
        flankingItems:3,
    });
});

$('.persons-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<i class="fas fa-arrow-right slider-next"></i>',
    prevArrow: '<i class="fas fa-arrow-left slider-prev"></i>',
    responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
});


function active() {
    let activeSlides = document.querySelectorAll('.slick-active');
    let lengthSlides = activeSlides.length;
    let centrNum = Math.ceil(lengthSlides/2)-1;
    if(lengthSlides > 2){
        activeSlides[centrNum].classList.add('active');
        activeSlides[centrNum - 1].classList.remove('active');
        activeSlides[centrNum + 1].classList.remove('active');
    }

}
window.addEventListener('load', active);
let slick = document.querySelector('.slick-initialized.slick-slider');
let slickSlides = document.querySelectorAll('.slick-initialized.slick-slider .slick-slide');
let next = slick.querySelector('.slider-next');
let prev = slick.querySelector('.slider-prev');
next.addEventListener('click', active);
prev.addEventListener('click', active);
for(let slide of slickSlides){
slide.addEventListener('mousemove', active);
}

let menuBar =document.querySelector('.menu-bar');
let burger = document.querySelector('.header__burger');
menuBar.addEventListener('click',function () {
    burger.classList.toggle('header__burger-visible');
})