// Burger menu
(function () {
  let burgerClose = document.querySelector('.mobile__close');
  let burgerOpen = document.querySelector('.header__burger');
  let menu = document.querySelector('.mobile__menu');
  let menuItems = document.querySelectorAll(".js-scroll");
  let body = document.querySelector('body');
  
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
    body.classList.remove('overflow-hidden');
    menu.classList.remove('mobile__menu_active');
    });
  }

  burgerClose.addEventListener('click', () => {
    menu.classList.remove('mobile__menu_active');
    body.classList.remove('overflow-hidden');
  })
  
  burgerOpen.addEventListener('click', () => {
    menu.classList.add('mobile__menu_active');
    body.classList.add('overflow-hidden');
  });



}());

//smooth scroll
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      //Delete line above and "headerElHeight" variable if header is not fixed
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());


// modal windows
(function () {
  let button = document.querySelectorAll('.js-booking'),
    closeBooking = document.querySelector('.js-close-booking'),
    closePopup = document.querySelectorAll('.js-close-popup'),
    container = document.querySelector('.container'),
    body = document.querySelector('body'),
    modal = document.querySelector('.modal'),
    popup = document.querySelector('.popup'),
    modalSubmit = document.querySelector('.modal__button');

  for ( let i = 0; i < button.length; i++ ) {
    button[i].addEventListener('click', () => {
      modal.classList.add('modal_active');
      container.classList.add('container_blur');
      body.classList.add('overflow-hidden');      
    })
  }

  for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener('click', () => popup.classList.remove('popup_active'))
  }

  closeBooking.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    container.classList.remove('container_blur');
    body.classList.remove('overflow-hidden');
    popup.classList.remove('popup_active')   
  });

  modalSubmit.addEventListener('click', () => popup.classList.add('popup_active'))

}());