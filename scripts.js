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

// Animate fade-in for skills, certs, projects on scroll
function animateOnScroll(selector, className = 'fade-in') {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach(el => observer.observe(el));
}

window.addEventListener('DOMContentLoaded', () => {
  // Add fade-in to skill, cert, and project cards
  document.querySelectorAll('.skills-grid .skill-card').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transitionDelay = `${0.1 + i * 0.1}s`;
    el.classList.add('fade-in-trigger');
  });
  document.querySelectorAll('.certifications-grid .cert-card').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transitionDelay = `${0.1 + i * 0.1}s`;
    el.classList.add('fade-in-trigger');
  });
  document.querySelectorAll('.project-gallery img').forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transitionDelay = `${0.1 + i * 0.1}s`;
    el.classList.add('fade-in-trigger');
  });

  animateOnScroll('.fade-in-trigger', 'fade-in');
});