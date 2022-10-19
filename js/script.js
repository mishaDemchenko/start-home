const burger = document.querySelector('.burger-container');
const link = document.querySelector('.link-container');
const body = document.querySelector('body');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    link.classList.toggle('open');
    body.classList.toggle('lock');
});