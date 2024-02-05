document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});