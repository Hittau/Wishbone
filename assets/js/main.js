const myBurger = document.querySelector('.header__burger');
const myNav = document.querySelector('.menu');

myBurger.onclick = function() {
   myNav.classList.toggle('active');
   myBurger.classList.toggle('active')
};