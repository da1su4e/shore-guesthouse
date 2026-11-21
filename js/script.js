const header = document.querySelector('.header');
const toggle = document.querySelector('.header__toggle');
const links = document.querySelectorAll('.nav__link');
const reveals = document.querySelectorAll('.reveal');

function setMenu(open) {
   header.classList.toggle('is-open', open);
   toggle.setAttribute('aria-expanded', open);
}

toggle.addEventListener('click', () => {
   setMenu(!header.classList.contains('is-open'));
});

links.forEach(link => {
   link.addEventListener('click', () => setMenu(false));
});

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
   if (e.matches) setMenu(false);
});

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
   });
}, {
   threshold: 0.1
});

reveals.forEach(el => observer.observe(el));