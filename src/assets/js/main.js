/**
 * JAD COUTURE — JAVASCRIPT ENGINE & INTERACTIONS
 * Institut de Formation Professionnelle Bilingue en Mode
 */

import { JAD_DATA } from '../../data/content.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initStickyHeader();
  initMobileNav();
  initScrollSpy();
  initGalleryFilterAndLightbox();
  initFormationsModal();
  initEnrollmentForm();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   01. HERO CINEMATIC SLIDER & VIDEO MANAGEMENT
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const tabs = document.querySelectorAll('.hero-scene-tab');
  const heroVideo = document.getElementById('heroVideo');
  if (!slides.length) return;

  let currentIndex = 0;
  let slideInterval = null;
  const slideDuration = 6000; // 6s per scene

  // Attempt to play video
  if (heroVideo) {
    heroVideo.play().catch(() => {
      // Autoplay with sound restricted, muted is set so it should play
    });
  }

  function goToSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    tabs.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    const next = (currentIndex + 1) % slides.length;
    goToSlide(next);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      goToSlide(index);
      startAutoplay();
    });
  });

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }

  startAutoplay();
}

/* --------------------------------------------------------------------------
   02. STICKY HEADER & SCROLL SPY
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  if (!navLinks.length || !sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   03. MOBILE NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const burgerBtn = document.querySelector('.burger-btn');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!burgerBtn || !mobileOverlay) return;

  const toggleNav = () => {
    const isOpen = burgerBtn.classList.toggle('open');
    mobileOverlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  burgerBtn.addEventListener('click', toggleNav);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerBtn.classList.remove('open');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   04. GALLERY FILTER & FULLSCREEN LIGHTBOX
   -------------------------------------------------------------------------- */
function initGalleryFilterAndLightbox() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxBackdrop = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  // Filter logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox logic
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || '';
      const meta = item.querySelector('.gallery-meta')?.textContent || '';

      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
      }
      if (lightboxCaption) {
        lightboxCaption.innerHTML = `<strong>${title}</strong> — ${meta}`;
      }
      if (lightboxBackdrop) {
        lightboxBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightboxBackdrop) {
      lightboxBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', (e) => {
      if (e.target === lightboxBackdrop) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* --------------------------------------------------------------------------
   05. FORMATIONS MODAL / DETAIL DRAWER
   -------------------------------------------------------------------------- */
function initFormationsModal() {
  const modalBackdrop = document.getElementById('formationModal');
  const modalBody = document.getElementById('formationModalContent');
  const modalClose = document.getElementById('formationModalClose');
  const detailBtns = document.querySelectorAll('[data-formation-id]');

  if (!modalBackdrop || !modalBody) return;

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-formation-id');
      const formation = JAD_DATA.formations.find(f => f.id === id);
      if (!formation) return;

      const competencesHtml = formation.competences.map(c => `
        <li style="display: flex; gap: 0.75rem; margin-bottom: 0.6rem; align-items: flex-start;">
          <span style="color: var(--color-azure-base); font-size: 1.1rem; line-height: 1;">✦</span>
          <span style="font-size: 0.95rem; color: var(--color-anthracite-700);">${c}</span>
        </li>
      `).join('');

      modalBody.innerHTML = `
        <div style="position: relative; margin: -2.5rem -2.5rem 2rem -2.5rem;">
          <img src="${formation.image}" alt="${formation.title}" style="width: 100%; height: 260px; object-fit: cover; border-top-left-radius: var(--radius-md); border-top-right-radius: var(--radius-md);" />
          <div style="position: absolute; bottom: 1rem; left: 1.5rem; background: rgba(7, 21, 41, 0.9); padding: 0.4rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-azure-base); color: var(--color-azure-light); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;">
            ${formation.category}
          </div>
          <div style="position: absolute; top: 1rem; left: 1.5rem; background: var(--color-gold-stars); color: #071529; padding: 0.35rem 0.85rem; border-radius: var(--radius-pill); font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">
            ${formation.diploma || 'Certifiant MINEFOP'}
          </div>
        </div>

        <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 0.5rem;">
          <span style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 700; color: var(--color-azure-base);">${formation.number}</span>
          <h2 style="font-size: 2rem; color: var(--color-primary-navy); margin-bottom: 0;">${formation.title}</h2>
        </div>

        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-anthracite-700); margin-bottom: 1.5rem;">${formation.shortDesc}</p>

        <div style="background-color: var(--color-ivory-light); padding: 1.5rem; border-radius: var(--radius-sm); border: 1px solid rgba(0, 163, 224, 0.25); margin-bottom: 1.5rem;">
          <h4 style="font-family: var(--font-sans); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--color-primary-navy); margin-bottom: 0.75rem;">Programme & Compétences Validées :</h4>
          <ul style="padding-left: 0;">
            ${competencesHtml}
          </ul>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; font-size: 0.88rem;">
          <div style="padding: 1rem; border: 1px solid rgba(7, 21, 41, 0.08); border-radius: var(--radius-sm);">
            <strong style="display: block; color: var(--color-primary-navy); margin-bottom: 0.25rem;">Public Concerné :</strong>
            <span style="color: var(--color-anthracite-500);">${formation.public}</span>
          </div>
          <div style="padding: 1rem; border: 1px solid rgba(7, 21, 41, 0.08); border-radius: var(--radius-sm);">
            <strong style="display: block; color: var(--color-primary-navy); margin-bottom: 0.25rem;">Modalités d'Examen :</strong>
            <span style="color: var(--color-anthracite-500);">${formation.modalites}</span>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <a href="#inscriptions" class="btn btn-primary-azure" onclick="selectFormationInForm('${formation.title}'); document.getElementById('formationModal').classList.remove('active'); document.body.style.overflow='';">
            Candidater à cette formation
          </a>
        </div>
      `;

      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Global helper for modal selection
window.selectFormationInForm = function(formationTitle) {
  const selectElem = document.getElementById('formationSelect');
  if (selectElem) {
    for (let i = 0; i < selectElem.options.length; i++) {
      if (selectElem.options[i].text.includes(formationTitle) || selectElem.options[i].value === formationTitle) {
        selectElem.selectedIndex = i;
        break;
      }
    }
  }
};

/* --------------------------------------------------------------------------
   06. ENROLLMENT FORM & WHATSAPP GENERATOR
   -------------------------------------------------------------------------- */
function initEnrollmentForm() {
  const form = document.getElementById('enrollmentForm');
  const whatsappDirectBtn = document.getElementById('whatsappDirectBtn');

  if (!form) return;

  function buildWhatsAppMessage() {
    const nom = document.getElementById('inputNom')?.value || '';
    const prenom = document.getElementById('inputPrenom')?.value || '';
    const tel = document.getElementById('inputTel')?.value || '';
    const email = document.getElementById('inputEmail')?.value || '';
    const ville = document.getElementById('inputVille')?.value || '';
    const formation = document.getElementById('formationSelect')?.value || '';
    const niveau = document.getElementById('niveauSelect')?.value || '';
    const message = document.getElementById('inputMessage')?.value || '';

    let text = `*CANDIDATURE INSTITUT JAD COUTURE*\n`;
    text += `_Formation Bilingue Agréée MINEFOP_\n`;
    text += `--------------------------------\n`;
    text += `*Nom & Prénom:* ${prenom} ${nom}\n`;
    text += `*Téléphone:* ${tel}\n`;
    if (email) text += `*Email:* ${email}\n`;
    text += `*Ville:* ${ville}\n`;
    text += `*Formation choisie:* ${formation}\n`;
    text += `*Niveau:* ${niveau}\n`;
    if (message) text += `*Projet/Message:* ${message}\n`;
    text += `--------------------------------\n`;
    text += `Bonjour, je souhaite obtenir les dates de rentrée et les frais de formation pour préparer mon diplôme (DQP / AQP). Merci !`;

    return encodeURIComponent(text);
  }

  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', () => {
      const msg = buildWhatsAppMessage();
      const url = `https://wa.me/237655006450?text=${msg}`;
      window.open(url, '_blank');
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Envoi de votre candidature...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = 'Demande enregistrée avec succès ✦';
      submitBtn.style.backgroundColor = '#20BA5A';
      submitBtn.style.color = '#FFFFFF';

      alert(`Félicitations ! Votre demande d'admission à JAD COUTURE a été transmise. Le secrétariat pédagogique de Dschang vous contactera par téléphone ou WhatsApp dans les plus brefs délais.`);

      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
      }, 4000);
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   07. SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-reveal]');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}
