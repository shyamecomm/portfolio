const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const roleTextEl = document.querySelector('#role-text');
const roles = [
  'Software Developer',
  'Software Engineer',
  'Techie',
  'Problem Solver',
];

if (roleTextEl) {
  let index = 0;

  setInterval(() => {
    roleTextEl.classList.add('out');

    setTimeout(() => {
      index = (index + 1) % roles.length;
      roleTextEl.textContent = roles[index];
      roleTextEl.classList.remove('out');
    }, 650);
  }, 3200);
}
