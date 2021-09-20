import { displayRaiting } from './raiting.js';

const menuButton = document.querySelector('.menu__button');
const menuLinks = document.querySelectorAll('.menu__link');

menuButton.addEventListener('click', function() {
    document.body.classList.toggle('menu__button--open');
});

for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', function() {
        document.body.classList.remove('menu__button--open');
    });
}

// self-raiting
displayRaiting();