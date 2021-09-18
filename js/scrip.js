const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener('click', showMenu);
}

function showMenu() {
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
}

