// Burger menu
(function () {
  let burgerClose = document.querySelector('.mobile__close');
  let burgerOpen = document.querySelector('.header__burger');
  let menu = document.querySelector('.mobile__menu');
  let menuItems = document.querySelectorAll(".js-scroll");
  
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
      menu.classList.remove('mobile__menu_active');
    });
  }

  burgerClose.addEventListener('click', () => {
    menu.classList.remove('mobile__menu_active');
  })
  
  burgerOpen.addEventListener('click', () => {
    menu.classList.add('mobile__menu_active');
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


// slider 
// (function() {
//   let leftBtn = document.querySelector
// }());