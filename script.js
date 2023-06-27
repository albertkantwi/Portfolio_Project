const mainMenu = document.querySelector('.nav-bar');
const openMenu = document.querySelector('.humburger');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.nav-link');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});
