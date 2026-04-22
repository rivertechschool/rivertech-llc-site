/* River Tech LLC — main.js
   Minimal vanilla JS: mobile menu toggle, smooth anchor scrolling, form handling.
*/
(function () {
  'use strict';

  // ===== Mobile menu =====
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileOverlay = document.querySelector('.mobile-overlay');

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', function () {
      const open = mobileOverlay.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on nav click
    mobileOverlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileOverlay.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ===== Smooth anchor scroll (for in-page # links) =====
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', '#' + id);
      }
    });
  });

  // ===== Contact form (mailto fallback) =====
  const form = document.querySelector('form.inquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const v = function (sel) { return (form.querySelector(sel) || {}).value || ''; };
      const name = v('[name="name"]');
      const email = v('[name="email"]');
      const userSubject = v('[name="subject"]');
      const message = v('[name="message"]');
      const to = form.dataset.mailto || form.dataset.to || 'hello@rivertech.llc';
      const subject = encodeURIComponent(
        userSubject
          ? 'River Tech LLC inquiry — ' + userSubject
          : 'River Tech LLC inquiry'
      );
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message + '\n\n' +
        '— Sent from rivertech.llc'
      );
      window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
  }
})();
