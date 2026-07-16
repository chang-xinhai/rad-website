(() => {
  'use strict';

  const menuButton = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.primary-nav');

  const closeMenu = () => {
    if (!menu || !menuButton) return;
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton?.addEventListener('click', () => {
    if (!menu) return;
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  menu?.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton?.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menu?.classList.contains('is-open')) return;
    if (!event.target.closest('.nav-shell')) closeMenu();
  });

  const header = document.querySelector('[data-header]');
  const hero = document.querySelector('.hero');
  if (header && hero && 'IntersectionObserver' in window) {
    const headerObserver = new IntersectionObserver(([entry]) => {
      header.classList.toggle('is-scrolled', entry.intersectionRatio < 0.85);
    }, { threshold: [0.85] });
    headerObserver.observe(hero);
  }

  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -58% 0px', threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  const copyButton = document.querySelector('[data-copy]');
  const copyStatus = document.querySelector('.copy-status');

  const fallbackCopy = (text) => {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (!copied) throw new Error('Copy command failed');
  };

  copyButton?.addEventListener('click', async () => {
    const target = document.querySelector(copyButton.dataset.copy);
    if (!target) return;
    const text = target.textContent.trim();

    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else fallbackCopy(text);
      copyButton.textContent = 'Copied';
      if (copyStatus) copyStatus.textContent = 'BibTeX copied to clipboard.';
    } catch {
      copyButton.textContent = 'Copy failed';
      if (copyStatus) copyStatus.textContent = 'Select the citation text and copy it manually.';
    }

    window.setTimeout(() => {
      copyButton.textContent = 'Copy BibTeX';
    }, 2200);
  });
})();
