const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const titles = [
  'Software Developer',
  'Software Engineer',
  'Techie',
  'AI Enthusiast',
];

const rollingTrack = document.querySelector('#rolling-track');
if (rollingTrack) {
  const lineHeightEm = 1.4;
  let index = 0;

  setInterval(() => {
    index += 1;
    rollingTrack.style.transition = 'transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)';
    rollingTrack.style.transform = `translateY(-${index * lineHeightEm}em)`;

    if (index === titles.length) {
      setTimeout(() => {
        rollingTrack.style.transition = 'none';
        rollingTrack.style.transform = 'translateY(0)';
        index = 0;
      }, 940);
    }
  }, 2300);
}

const heroQuoteEl = document.querySelector('.hero-quote');
if (heroQuoteEl) {
  const quoteTextEl = heroQuoteEl.querySelector('.hero-quote-text');
  const fullQuote = heroQuoteEl.getAttribute('data-quote')?.trim() || quoteTextEl?.textContent?.trim() || '';
  let index = 0;
  let isDeleting = false;
  const typeDelay = 95;
  const deleteDelay = 40;
  const pauseAfterTyped = 1800;
  const pauseAfterCleared = 700;

  if (quoteTextEl) {
    quoteTextEl.textContent = '';
  }

  const typeLoop = () => {
    if (!quoteTextEl) return;
    quoteTextEl.textContent = fullQuote.slice(0, index);

    if (!isDeleting && index < fullQuote.length) {
      index += 1;
      setTimeout(typeLoop, typeDelay);
      return;
    }

    if (!isDeleting && index === fullQuote.length) {
      setTimeout(() => {
        isDeleting = true;
        typeLoop();
      }, pauseAfterTyped);
      return;
    }

    if (isDeleting && index > 0) {
      index -= 1;
      setTimeout(typeLoop, deleteDelay);
      return;
    }

    if (isDeleting && index === 0) {
      isDeleting = false;
      setTimeout(typeLoop, pauseAfterCleared);
    }
  };

  setTimeout(typeLoop, 400);
}

const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

const nav = document.querySelector('#site-nav');
const menuToggle = document.querySelector('.menu-toggle');

if (nav && menuToggle) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1040) {
      closeMenu();
    }
  });
}