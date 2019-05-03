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
  const form = document.querySelector('#contact-form');
  const formMessage = document.querySelector('.form-message');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  
  const validate = () => {
    if(nameInput.value == '') {
      console.log(nameInput.value);
    }
  }

  form.addEventListener('blur', validate);
});