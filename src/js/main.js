document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 620
  });
  var spy = new Gumshoe('#navbar-items a')

  const burgerBtn = document.querySelector('.burger');
  const navbarDataset = document.querySelector('#'+ burgerBtn.dataset.target);
  const navbar = document.querySelector('#navbarMenu');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    navbarDataset.classList.toggle('is-active');
  });
  
  function setNavbarAnim() {
    const screenWidth = window.innerWidth;
    window.addEventListener('scroll', () => {
      let scrollPosition = window.pageYOffset;
      if(scrollPosition > 170) {
        mainNavEl.classList.add('scrollDown');
      } else if(scrollPosition < 170) {
        mainNavEl.classList.remove('scrollDown');
      }
    });
  }

  //Form validations
  const formMessage = document.querySelector('.form-message');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('phone');
  const phoneInpute = document.getElementById('phone');
  function validations() {
    if(nameInput.value == '') {
      nameInput.classList.add('is-danger');
      formMessage.classList.remove('form-message');
    } else {
      nameInput.classList.remove('is-danger');
      formMessage.classList.add('form-message');
    }
  }
  nameInput.addEventListener('blur', validations);
});