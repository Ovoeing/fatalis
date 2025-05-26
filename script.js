const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('#sidebar a');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', sidebar.classList.contains('open'));
  document.body.classList.toggle('sidebar-open');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('sidebar-open');
});

links.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('sidebar-open');
  });
});
