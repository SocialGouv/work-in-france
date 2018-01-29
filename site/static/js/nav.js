// Menu.
// ------------------------------------------
let body = document.querySelector('body');
let menuBtnClose = document.querySelector('.site-menu-close');
let menuBtnOpen = document.querySelector('.site-menu-open');
let menuContainer = document.querySelector('.site-menu');

let toggleMenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (menuContainer.classList.contains('js-menu-open')) {
    // Close menu.
    menuContainer.classList.remove('js-menu-open');
    body.classList.remove('js-menu-open');
  } else {
    // Open menu.
    menuContainer.classList.add('js-menu-open');
    body.classList.add('js-menu-open');
  }
}

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
