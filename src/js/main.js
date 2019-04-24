document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const navbarDataset = document.querySelector('#'+ burgerBtn.dataset.target);
  const navbar = document.querySelector('#navbarMenu');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    navbarDataset.classList.toggle('is-active');
  });

  const mainNavEl = document.querySelector('#main-navbar');
  window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;
    if(scrollPosition > 170) {
      mainNavEl.classList.add('scrollDown');
    }
    else if(scrollPosition < 170) {
      mainNavEl.classList.remove('scrollDown');
    }
  });
  
});