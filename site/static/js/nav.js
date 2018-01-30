// Menu.
// ------------------------------------------
let body = document.querySelector('body');

let menuOpenImg = document.querySelector('#menu-open-btn');

let menuOpenButtons = document.querySelectorAll('.js-menu-open-btn');
let menuCloseButtons = document.querySelectorAll('.js-menu-close-btn');

let menuContainer = document.querySelector('.menu');

let toggleMenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (menuContainer.classList.contains('js-menu-is-opened')) {
    // Close menu.
    menuContainer.classList.remove('js-menu-is-opened');
    body.classList.remove('js-menu-is-opened');
    menuOpenImg.focus();
  } else {
    // Open menu.
    menuContainer.classList.add('js-menu-is-opened');
    body.classList.add('js-menu-is-opened');
    menuContainer.querySelector('a').focus();
  }
}

Array.from(menuOpenButtons).forEach(el => {
  el.addEventListener('click', toggleMenu);
});

Array.from(menuCloseButtons).forEach(el => {
  el.addEventListener('click', toggleMenu);
});
