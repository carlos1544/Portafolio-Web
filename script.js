const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  applyTheme(savedTheme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(current);
});

const filterBar = document.getElementById('filterBar');
const projectCards = document.querySelectorAll('.project-card');

filterBar.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;

  filterBar.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('is-active'));
  button.classList.add('is-active');

  const filter = button.dataset.filter;

  projectCards.forEach((card) => {
    const matches = filter === 'all' || card.dataset.tech === filter;
    card.classList.toggle('is-hidden', !matches);
  });
});

const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = 'Por favor completa todos los campos.';
    formFeedback.className = 'form-feedback is-error';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formFeedback.textContent = 'Ingresa un correo válido.';
    formFeedback.className = 'form-feedback is-error';
    return;
  }

  formFeedback.textContent = '¡Mensaje listo para enviar! (conecta esto a un servicio real cuando lo necesites)';
  formFeedback.className = 'form-feedback is-success';
  contactForm.reset();
});

const backToTop = document.getElementById('backToTop');

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();