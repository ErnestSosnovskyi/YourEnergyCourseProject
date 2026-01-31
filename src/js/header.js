const menuOpenBtn = document.querySelector('.js-open-menu');
const menuCloseBtn = document.querySelector('.js-close-menu');
const mobileMenu = document.querySelector('.js-menu-container');
const menuLinks = document.querySelectorAll('.mobile-link');

const openMenu = () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
};

if (menuOpenBtn) {
  menuOpenBtn.addEventListener('click', openMenu);
}

if (menuCloseBtn) {
  menuCloseBtn.addEventListener('click', closeMenu);
}

if (mobileMenu) {
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMenu();
    }
  });
}

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

navLinks.forEach(link => {
  if (link.getAttribute('href') === './favorites.html' && currentPath.includes('favorites')) {
    link.classList.add('active');
  } else if (link.getAttribute('href') === './index.html' && !currentPath.includes('favorites')) {
     link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});