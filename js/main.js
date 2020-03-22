// Burger menu
(function () {
  let burgerClose = document.querySelector('.mobile__close');
  let burgerOpen = document.querySelector('.header__burger');
  let menu = document.querySelector('.mobile__menu');
  let menuItems = document.querySelectorAll(".mobile-menu__link");
  
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