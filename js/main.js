// Burger menu
(function () {
  let burgerClose = document.querySelector('.mobile__close');
  let burgerOpen = document.querySelector('.header__burger');
  let menu = document.querySelector('.mobile__menu');
  let menuItems = document.querySelectorAll(".js-scroll"); // Menu links
  let body = document.querySelector('body');

  let hideMenu = () => {
    body.classList.remove('overflow-hidden'); // Restore scroll
    menu.classList.remove('mobile__menu_active'); // Hide menu
  }
  
  // Click on any link will close mobile menu
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', hideMenu);
  }

  burgerClose.addEventListener('click', hideMenu);
  
  burgerOpen.addEventListener('click', () => {
    menu.classList.add('mobile__menu_active'); // Show menu
    body.classList.add('overflow-hidden'); // Remove scroll
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
  let button = document.querySelectorAll('.js-booking'), // Trigger to open modal
    closeBooking = document.querySelector('.js-close-booking'),
    closePopup = document.querySelectorAll('.js-close-popup'),
    container = document.querySelector('.container'),
    body = document.querySelector('body'),
    modal = document.querySelector('.modal'),
    popup = document.querySelector('.popup'),
    modalSubmit = document.querySelector('.modal__button');

  for ( let i = 0; i < button.length; i++ ) {
    // Add listener to each trigger
    button[i].addEventListener('click', () => {
      modal.classList.add('modal_active'); // Open modal
      container.classList.add('container_blur'); // Blur page
      body.classList.add('overflow-hidden'); // Remove scroll 
    })
  }

  for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener('click', () => popup.classList.remove('popup_active')) // Hide popup
  }

  closeBooking.addEventListener('click', () => {
    modal.classList.remove('modal_active'); // Hide modal
    container.classList.remove('container_blur'); // Blur page
    body.classList.remove('overflow-hidden'); // Restore scroll
    popup.classList.remove('popup_active'); // Hide popup
  });

  modalSubmit.addEventListener('click', () => popup.classList.add('popup_active')) // Show popup

}());