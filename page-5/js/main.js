$(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite: false,
    });

    $('.questions__item-title').on('click', function(){
        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });
});

let burger = document.querySelector('.menu-mobile');
let menu = document.querySelector('.header__inner-mobile');
let topInner = document.querySelector('.top__inner');
let headerInner = document.querySelector('.header__inner');

let menuItem = document.querySelectorAll('.menu-mobile-item');


let i = 1;

burger.addEventListener('click', () => {
    menuItem[2].classList.toggle('show');
    menuItem[0].classList.toggle('item-up');
    menuItem[1].classList.toggle('item-down');
    menu.classList.toggle('hide');
    menu.classList.toggle('active');
    
    if (document.documentElement.scrollTop > 60){
        headerInner.classList.toggle('trans');
        headerInner.classList.toggle('bg');
    }
    
    
});

window.onscroll = function() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60)
    {
        headerInner.classList.add('bg');
        headerInner.classList.remove('trans');
    } else{
        headerInner.classList.add('trans');
        headerInner.classList.remove('bg');
    }
   
   
    

}
