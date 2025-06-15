// Responsive navbar for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

// Active link highlighting on scroll (desktop & mobile)
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.sidebar-nav a, .navbar a');

window.onscroll = () => {
  let scrollY = window.scrollY;
  sections.forEach(sec => {
    let offset = sec.offsetTop - 120;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (scrollY >= offset && scrollY < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
};