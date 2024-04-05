const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    logo.classList.toggle('logo--visible');
})