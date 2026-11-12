const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

const form = document.getElementById('demoForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const team = document.getElementById('team').value;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  message.className = 'form-message';
  if (!name || !validEmail.test(email) || !team) {
    message.textContent = 'Please enter your name, a valid email, and select a team size.';
    message.classList.add('error');
    return;
  }

  message.textContent = `Thanks, ${name}! Your demo request has been received.`;
  message.classList.add('success');
  form.reset();
});
