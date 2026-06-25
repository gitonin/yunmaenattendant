/* ══════════════════════════════════════
   YUNMA — Site JS
   - Burger menu + nav panel
   - FAQ accordion
   - Header scroll shadow
══════════════════════════════════════ */

(function () {
  'use strict';

  /* ── ELEMENTS ── */
  const burgerBtn   = document.getElementById('burgerBtn');
  const navPanel    = document.getElementById('navPanel');
  const navOverlay  = document.getElementById('navOverlay');
  const navCloseBtn = document.getElementById('navCloseBtn');
  const navLinks    = document.querySelectorAll('.nav-link');
  const header      = document.getElementById('site-header');

  /* ── NAV OPEN / CLOSE ── */
  function openNav() {
    burgerBtn.setAttribute('aria-expanded', 'true');
    burgerBtn.classList.add('is-open');
    navPanel.classList.add('is-open');
    navPanel.setAttribute('aria-hidden', 'false');
    navOverlay.classList.add('is-visible');
    navOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.classList.remove('is-open');
    navPanel.classList.remove('is-open');
    navPanel.setAttribute('aria-hidden', 'true');
    navOverlay.classList.remove('is-visible');
    navOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burgerBtn.addEventListener('click', openNav);
  navCloseBtn.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navPanel.classList.contains('is-open')) {
      closeNav();
      burgerBtn.focus();
    }
  });

  /* ── HEADER SCROLL SHADOW ── */
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── FAQ ACCORDION ── */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var btn    = item.querySelector('.faq-q');
    var answer = item.querySelector('.faq-a');

    if (!btn || !answer) return;

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      /* Close all items */
      faqItems.forEach(function (other) {
        var otherBtn    = other.querySelector('.faq-q');
        var otherAnswer = other.querySelector('.faq-a');
        if (otherBtn && otherAnswer) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.classList.remove('is-open');
        }
      });

      /* Open clicked item if it was closed */
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.classList.add('is-open');
      }
    });
  });

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
