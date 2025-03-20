const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  if (menu && menuLinks) {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  }
};

if (menu) {
  menu.addEventListener('click', mobileMenu);
}

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  
  if (!homeMenu || !aboutMenu || !servicesMenu) return;

  let scrollPos = window.scrollY;

  // Highlight Home
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
  }
  // Highlight About
  else if (window.innerWidth > 960 && scrollPos >= 600 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
  }
  // Highlight Services
  else if (window.innerWidth > 960 && scrollPos >= 1400) {
    servicesMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
  }

  // Remove highlight if menu is inactive
  if (elem && window.innerWidth < 960) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close Mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
};

if (menuLinks) {
  menuLinks.addEventListener('click', hideMobileMenu);
}
if (navLogo) {
  navLogo.addEventListener('click', hideMobileMenu);
}


