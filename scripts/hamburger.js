const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('main-link');
const nav = document.getElementById('main-navbar');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});