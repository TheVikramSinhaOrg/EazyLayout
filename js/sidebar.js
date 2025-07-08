// Collapsible Categories
const headers = document.querySelectorAll('[data-toggle]');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    body.style.display = body.style.display === 'none' ? 'block' : 'none';
    header.classList.toggle('collapsed');
  });
});
