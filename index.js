document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const closeBtn = document.querySelector('.menu__close-btn');
    const menu = document.querySelector('.menu');

    function toggleMenu() {
        if (window.innerWidth > 509) {
            menu.style.display = 'none';
        }
    }

    burgerBtn.addEventListener('click', function () {
        menu.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        menu.style.display = 'none';
    });

    window.addEventListener('resize', toggleMenu);

    toggleMenu();
});