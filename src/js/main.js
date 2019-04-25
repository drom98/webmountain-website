document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger');
  const navbarDataset = document.querySelector('#'+ burgerBtn.dataset.target);
  const navbar = document.querySelector('#navbarMenu');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    navbarDataset.classList.toggle('is-active');
  });

  //Navbar animation
  const mainNavEl = document.querySelector('#main-navbar');
  const navItems = document.querySelectorAll('.main-nav-items');

  function test(option) {
    for(let i = 0; i < navItems[0].childElementCount; i++) {
      for(let j = 0; j < navItems[0].children[i].classList.length; j++) {
        if(navItems[0].children[i].classList[j] != 'is-active') {
          if(option) {
            navItems[0].children[i].classList[j].add('has-text-dark');
          }
        } else {
          
        }
      }
    }
  }
  
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
});