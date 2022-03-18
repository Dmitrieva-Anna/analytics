'use strict';

/**
 * mainMenuTrigger - показ и скрытие мобльного меню
 */
const mainMenuTrigger = () => {
    const menuTrigger = document.querySelector('.js-menuTrigger');
    const menuMove = document.querySelector('.js-menuMove');

    // new
    const mobileMenu = document.querySelector('.js-mobileMenu');
    const mobileShadow = document.querySelector('.js-mobileShadow');

    const toggleMenu = () => {
        menuTrigger.classList.toggle('change')
        mobileMenu.classList.toggle('active');
        mobileShadow.classList.toggle('active');
        document.getElementsByTagName('body')[0].classList.toggle('scroll-less')
    }

    menuTrigger.addEventListener('click', toggleMenu);
    mobileShadow.addEventListener('click', toggleMenu);
}

mainMenuTrigger();