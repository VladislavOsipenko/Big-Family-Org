'use strict';

document.addEventListener('DOMContentLoaded', () => {
    $('.galereya__slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        variableWidth: true,
        adaptiveHeight: true,

        responsive: [
        {
            breakpoint: 768,
            settings: {
            centerMode: true,
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            centerMode: true,
            slidesToShow: 1
            }
        }
        ]
    });

    //modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__li'),
        hamburger = document.querySelector('.header__hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('header__hamburger_active');
                menu.classList.toggle('header__menu_active');
            })
        });

        const animItems = document.querySelectorAll('._anim-items');

        if(animItems.length > 0) {
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll() {
                for (let index = 0; index < animItems.length; index++) {
                    const animItem = animItems[index];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;
    
                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart; 
                    }
    
                    if ((scrollY > animItemOffset - animItemPoint) && scrollY <(animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                    } else {
                        if (!animItem.classList.contains('_anim-no-hide')) {
                            animItem.classList.remove('_active');
                        }
                        
                    }
                }
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(), 
                    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                    scrollTop = window.scrollY || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
            }
            setTimeout(() => {
                animOnScroll();
            }, 400);
            
    
        }
});
