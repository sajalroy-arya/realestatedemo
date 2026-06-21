// ── NAV SCROLL ──
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

hamburger.addEventListener('click', () => navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navMobile.classList.remove('open')));

// ── HERO PARALLAX ──
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroImg.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    }
  }, { passive: true });
}

// ── PROPERTY SEARCH TABS ──
document.querySelectorAll('.search-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ── SEARCH BUTTON ──
const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const loc = document.getElementById('search-location').value;
    const type = document.getElementById('search-type').value;
    const budget = document.getElementById('search-budget').value;
    // Scroll to properties section
    const propSection = document.getElementById('properties');
    if (propSection) {
      window.scrollTo({ top: propSection.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
}

// ── PROPERTY FILTERS ──
const filterBtns = document.querySelectorAll('.prop-filter');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.prop-card').forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.opacity = '0.3';
        card.style.pointerEvents = 'none';
      }
    });
    // Reset pointer events on visible
    document.querySelectorAll('.prop-card').forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.pointerEvents = '';
      }
    });
  });
});

// ── HORIZONTAL PROPERTY SCROLL ──
const propTrack = document.getElementById('prop-track');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const dots = document.querySelectorAll('.prop-dot');

const cardWidth = 360 + 24; // card width + gap

if (scrollLeftBtn && scrollRightBtn && propTrack) {
  scrollLeftBtn.addEventListener('click', () => {
    propTrack.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
  scrollRightBtn.addEventListener('click', () => {
    propTrack.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
}

// Update dots on scroll
if (propTrack && dots.length) {
  propTrack.addEventListener('scroll', () => {
    const scrollLeft = propTrack.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }, { passive: true });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      propTrack.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
    });
  });
}

// ── DRAG TO SCROLL (Mouse) ──
if (propTrack) {
  let isDown = false, startX, scrollStart;
  propTrack.addEventListener('mousedown', e => {
    isDown = true;
    propTrack.classList.add('dragging');
    startX = e.pageX - propTrack.offsetLeft;
    scrollStart = propTrack.scrollLeft;
  });
  propTrack.addEventListener('mouseleave', () => { isDown = false; propTrack.classList.remove('dragging'); });
  propTrack.addEventListener('mouseup', () => { isDown = false; propTrack.classList.remove('dragging'); });
  propTrack.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - propTrack.offsetLeft;
    propTrack.scrollLeft = scrollStart - (x - startX) * 1.2;
  });
}

// ── FAVOURITE BUTTONS ──
document.querySelectorAll('.prop-fav').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    btn.classList.toggle('saved');
    const svg = btn.querySelector('svg path');
    if (svg) svg.style.fill = btn.classList.contains('saved') ? 'var(--gold)' : 'none';
  });
});

// ── FORM SUBMISSION ──
const formSubmit = document.getElementById('form-submit');
if (formSubmit) {
  formSubmit.addEventListener('click', () => {
    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    if (!name || !phone) {
      formSubmit.textContent = '⚠ Please fill your name & phone';
      setTimeout(() => formSubmit.textContent = 'Book My Free Consultation', 2500);
      return;
    }
    formSubmit.textContent = '✓ Consultation Booked!';
    formSubmit.style.background = '#16a34a';
    setTimeout(() => {
      formSubmit.textContent = 'Book My Free Consultation';
      formSubmit.style.background = '';
    }, 3000);
  });
}

// ── SCROLL ANIMATIONS ──
const fadeEls = document.querySelectorAll(
  '.pain-card, .service-card, .team-card, .testi-card, .jf-step, .section-header, .why-card, .stat-item'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

['.pain-grid', '.services-grid', '.team-grid', '.testi-grid', '.why-grid'].forEach(sel => {
  const parent = document.querySelector(sel);
  if (parent) parent.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
});

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
fadeEls.forEach(el => obs.observe(el));

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
    }
  });
});

// ── COUNTER ANIMATION (Stats bar) ──
function animateCounter(el, target, prefix = '', suffix = '') {
  const isDecimal = String(target).includes('.');
  let start = 0;
  const duration = 1800;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = isDecimal ? (eased * target).toFixed(1) : Math.floor(eased * target);
    el.textContent = prefix + val + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsBar = document.querySelector('.stats-bar');
if (statsBar) {
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      statsObs.disconnect();
      // Animate stats – handled by just making them visible smoothly
    }
  }, { threshold: 0.5 });
  statsObs.observe(statsBar);
}
