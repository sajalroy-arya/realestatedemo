// ══════════════════════════════════════════════════════
// ── LANGUAGE SWITCHER ──
// ══════════════════════════════════════════════════════
const T = {
  en: {
    'nav-why':'Why Us','nav-properties':'Properties','nav-services':'Services',
    'nav-team':'Our Agents','nav-cta':'Book a Tour',
    'hero-eyebrow':'Premium Real Estate · Mumbai · Pune · Goa',
    'hero-headline':'Find Your Perfect<br/><em>Dream Property.</em>',
    'hero-sub':"Mumbai's most trusted luxury real estate firm. From iconic penthouses to beachfront villas — we find properties that match your lifestyle, not just your budget.",
    'tab-buy':'Buy','tab-rent':'Rent','tab-invest':'Invest',
    'search-loc':'Location','search-type':'Property Type','search-budget':'Budget','search-btn':'Search',
    'trust-1':'800+ Properties Sold','trust-2':'15 Years of Excellence','trust-3':'4.9★ on Google',
    'stat-1':'Total Deals Closed','stat-2':'Properties Sold','stat-3':'Market Experience',
    'stat-4':'Client Satisfaction','stat-5':'Google Rating',
    'why-eyebrow':'Why Prestige Realty',
    'why-title':'The Agency Others Get<br/><em>Compared Against</em>',
    'why-desc':"Hundreds of agencies operate in Mumbai. Here's why discerning buyers and investors choose us — and refer us to everyone they know.",
    'why-1-h':'Verified Listings Only','why-1-p':'Every property is legally verified, RERA-registered, and personally inspected. No ghost listings. No surprises.',
    'why-2-h':'Zero-Pressure Advisory','why-2-p':'We recommend only what fits your lifestyle and financial goals — nothing more, never less.',
    'why-3-h':'Exclusive Off-Market Access','why-3-p':'Our 15-year network gives you first access to properties that never appear publicly — before any other buyer knows.',
    'why-4-h':'End-to-End Support','why-4-p':'From first visit to registry day — legal, loans, documentation. One contact, total accountability throughout.',
    'why-5-h':'Best Price Guarantee','why-5-p':"We've negotiated below asking price for 94% of our clients. Our market data ensures you never overpay.",
    'why-6-h':'Truly Private Experience','why-6-p':'Private viewings, confidential valuations, and NDA-protected transactions for clients who value discretion.',
    'prop-eyebrow':'Featured Properties',
    'prop-title':'Handpicked Exclusives.<br/><em>Only the Finest.</em>',
    'prop-desc':"Every listing here has been personally curated by our senior advisors. These aren't just properties — they're lifestyle statements.",
    'filter-all':'All Properties','filter-villa':'Villas','filter-pent':'Penthouses',
    'filter-apt':'Apartments','filter-estate':'Estates','filter-comm':'Commercial',
    'cta-eyebrow':'Your Property Journey Starts Here',
    'cta-title':'Your First Consultation<br/>Is Completely Free &<br/><em>Obligation-Free.</em>',
    'cta-sub':'30 minutes with a senior property advisor. Honest market insights. A personalised shortlist. No pressure to proceed — just expert advice.',
    'cta-btn':'Book My Free Consultation',
    'wa-text':'Chat with Us',
  },
  hi: {
    'nav-why':'हमारे बारे में','nav-properties':'प्रॉपर्टीज़','nav-services':'सेवाएं',
    'nav-team':'हमारे एजेंट','nav-cta':'टूर बुक करें',
    'hero-eyebrow':'प्रीमियम रियल एस्टेट · मुंबई · पुणे · गोवा',
    'hero-headline':'अपनी परफेक्ट<br/><em>ड्रीम प्रॉपर्टी खोजें।</em>',
    'hero-sub':'मुंबई की सबसे भरोसेमंद लक्ज़री रियल एस्टेट फर्म। आइकॉनिक पेंटहाउस से बीचफ्रंट विला तक — हम वो प्रॉपर्टी खोजते हैं जो आपकी लाइफस्टाइल से मेल खाए।',
    'tab-buy':'खरीदें','tab-rent':'किराया','tab-invest':'निवेश',
    'search-loc':'स्थान','search-type':'प्रॉपर्टी टाइप','search-budget':'बजट','search-btn':'खोजें',
    'trust-1':'800+ प्रॉपर्टी बेची गईं','trust-2':'15 साल की उत्कृष्टता','trust-3':'4.9★ गूगल पर',
    'stat-1':'कुल डील बंद','stat-2':'प्रॉपर्टी बेची','stat-3':'बाज़ार अनुभव',
    'stat-4':'ग्राहक संतुष्टि','stat-5':'गूगल रेटिंग',
    'why-eyebrow':'प्रेस्टिज रियल्टी क्यों?',
    'why-title':'वो एजेंसी जिससे<br/><em>सब तुलना करते हैं</em>',
    'why-desc':'मुंबई में सैकड़ों एजेंसियां हैं। जानिए क्यों समझदार खरीदार और निवेशक हमें चुनते हैं — और अपने सभी जानने वालों को हमें रेफर करते हैं।',
    'why-1-h':'सिर्फ वेरिफाइड लिस्टिंग','why-1-p':'हर प्रॉपर्टी RERA-रजिस्टर्ड और व्यक्तिगत रूप से निरीक्षित है। कोई नकली लिस्टिंग नहीं, कोई झूठ नहीं।',
    'why-2-h':'बिना दबाव परामर्श','why-2-p':'हम केवल वही सुझाते हैं जो आपकी लाइफस्टाइल और वित्तीय लक्ष्यों के अनुकूल हो — न कम, न ज़्यादा।',
    'why-3-h':'ऑफ-मार्केट प्रॉपर्टी तक पहुंच','why-3-p':'हमारा 15 साल का नेटवर्क आपको उन प्रॉपर्टीज़ तक पहले पहुंचाता है जो सार्वजनिक रूप से कभी नहीं आतीं।',
    'why-4-h':'शुरू से अंत तक सहायता','why-4-p':'पहली विज़िट से रजिस्ट्री तक — कानूनी, लोन, दस्तावेज़। एक ही संपर्क, पूरी जवाबदेही।',
    'why-5-h':'सर्वोत्तम मूल्य गारंटी','why-5-p':'हमने 94% क्लाइंट्स के लिए मांगे गए मूल्य से कम पर सौदा किया है। आप अधिक न चुकाएं, यह हम सुनिश्चित करते हैं।',
    'why-6-h':'पूर्णतः निजी अनुभव','why-6-p':'प्राइवेट व्यूइंग, गोपनीय वैल्यूएशन, और NDA-संरक्षित लेनदेन — विवेकशील क्लाइंट्स के लिए।',
    'prop-eyebrow':'विशेष प्रॉपर्टीज़',
    'prop-title':'हाथ से चुनी गई एक्सक्लूसिव।<br/><em>केवल सर्वश्रेष्ठ।</em>',
    'prop-desc':'यहाँ हर लिस्टिंग हमारे वरिष्ठ सलाहकारों द्वारा व्यक्तिगत रूप से चुनी गई है। ये सिर्फ प्रॉपर्टी नहीं — ये एक लाइफस्टाइल है।',
    'filter-all':'सभी','filter-villa':'विला','filter-pent':'पेंटहाउस',
    'filter-apt':'अपार्टमेंट','filter-estate':'एस्टेट','filter-comm':'कमर्शियल',
    'cta-eyebrow':'आपकी प्रॉपर्टी यात्रा यहाँ से शुरू होती है',
    'cta-title':'आपकी पहली सलाह<br/>बिल्कुल मुफ़्त &<br/><em>बिना किसी बाध्यता के।</em>',
    'cta-sub':'वरिष्ठ प्रॉपर्टी सलाहकार के साथ 30 मिनट। ईमानदार बाज़ार जानकारी। व्यक्तिगत शॉर्टलिस्ट। आगे बढ़ने का कोई दबाव नहीं।',
    'cta-btn':'मुफ़्त परामर्श बुक करें',
    'wa-text':'हमसे बात करें',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const dict = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
  // Toggle active button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Persist preference
  try { localStorage.setItem('prg_lang', lang); } catch(e) {}
}

// Lang switch buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Restore saved preference
try {
  const saved = localStorage.getItem('prg_lang');
  if (saved && T[saved]) setLang(saved);
} catch(e) {}

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
const langSwitch = document.getElementById('langSwitch');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  // Hide lang switch after scrolling past hero intro (~120px)
  if (langSwitch) langSwitch.classList.toggle('hidden', window.scrollY > 120);
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
