document.addEventListener('DOMContentLoaded', () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 620
  });
  var spy = new Gumshoe('#navbar-items a')

  const burgerBtn = document.querySelector('.burger');
  const navbarDataset = document.querySelector('#'+ burgerBtn.dataset.target);
  const navbar = document.querySelector('#navbarMenu');

  function getNavItems() {
    const navbarItems = document.querySelectorAll('.navbar-item');

    navbarItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-active');
        navbarDataset.classList.toggle('is-active');
      })
    });
  }

  getNavItems();

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
  function validate() {
    const inputs = document.querySelectorAll('form input, form textarea');
    const errorMessage = document.querySelectorAll('form p');
    const submitBtn = document.querySelector('button[type=submit]');
    submitBtn.disabled = true;

    inputs.forEach((input, index) => {
      input.addEventListener('blur', () => {
        console.log(input);
        console.log(index);
        if(input.getAttribute('name') == 'name') {
          validateName(input, errorMessage[index-1]);
        };
        if(input.getAttribute('name') == 'email') {
          validateEmail(input, errorMessage[index-1]);
        };
        if(input.getAttribute('name') == 'phone') {
          validatePhone(input, errorMessage[index-1]);
        };
        if(input.getAttribute('type') == 'checkbox') {
          validateCheckbox(input, submitBtn);
        }
      });
    });
  };

  function validateName(name, message) {
    if(name.value.length < 3) {
      displayError(name, "is-danger", message, "block");
    } else {
      displayError(name, "is-light", message, "none");
    }
  }

  function validateEmail(email, message) {
    const patternValidation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email.value.length > 0) {
      if(!patternValidation.test(email.value)) {
        console.log("inválido");
        displayError(email, "is-danger", message, "inline-block");
      } else {
        console.log("válido");
        displayError(email, "is-light", message, "none");
      }
    } else {
      console.log("inválido");
      displayError(email, "is-danger", message, "inline-block");
    }
  }

  function validatePhone(phone, message) {
    const phonePattern = /^\d{9}$/;
    if(!phonePattern.test(phone.value)) {
      displayError(phone, "is-danger", message, "block");
    } else {
      displayError(phone, "is-light", message, "none");
    }
  }

  function validateCheckbox(checkbox, submitBtn) {
    checkbox.addEventListener('click', () => {
      if(checkbox.checked == false) {
        console.log('desmarcado');
        btnState(submitBtn, true);
      } else {
        console.log('checked');
        btnState(submitBtn, false);
      }
    })
  }

  function displayError(input, errorClass, message, state) {
    input.classList.remove('is-danger');
    input.classList.add(`${errorClass}`);
    message.style.display = `${state}`;
  }

  function btnState(btn, state) {
    btn.disabled = state;
  }

  validate();
});