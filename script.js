const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const links = document.querySelectorAll('#sidebar a');

function toggleSidebar(open) {
  sidebar.classList.toggle('open', open);
  overlay.classList.toggle('active', open);
  menuBtn.setAttribute('aria-expanded', open);
  document.body.classList.toggle('sidebar-open', open);
  document.querySelector('main').style.marginLeft = open && window.innerWidth >= 768 ? '240px' : '0';
}

menuBtn.addEventListener('click', () => {
  toggleSidebar(!sidebar.classList.contains('open'));
});

overlay.addEventListener('click', () => {
  toggleSidebar(false);
});

links.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    toggleSidebar(false);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && sidebar.classList.contains('open')) {
    document.querySelector('main').style.marginLeft = '240px';
  } else {
    document.querySelector('main').style.marginLeft = '0';
  }
});