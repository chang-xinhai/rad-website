(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const effectiveTheme = () => {
    const selected = root.dataset.theme;
    if (selected === 'dark' || selected === 'light') return selected;
    return colorScheme.matches ? 'dark' : 'light';
  };

  const updateThemeControl = () => {
    if (!themeButton) return;
    const nextTheme = effectiveTheme() === 'dark' ? 'light' : 'dark';
    const label = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)}`;
    themeButton.textContent = label;
    themeButton.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
  };

  const savedTheme = localStorage.getItem('rad-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.dataset.theme = savedTheme;
  }
  updateThemeControl();

  themeButton?.addEventListener('click', () => {
    const nextTheme = effectiveTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('rad-theme', nextTheme);
    updateThemeControl();
  });

  colorScheme.addEventListener?.('change', updateThemeControl);

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

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

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
