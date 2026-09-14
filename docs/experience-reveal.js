(() => {
  const entries = [...document.querySelectorAll('#experience .log-entry')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!entries.length || reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(records => {
    records.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.remove('reveal-pending');
      observer.unobserve(target);
    });
  }, { threshold: 0.08 });

  function observeEntries() { entries.forEach(entry => {
    // Keep already-visible content steady when navigating directly to a section.
    if (entry.getBoundingClientRect().top < window.innerHeight) return;
    entry.classList.add('reveal-pending');
    observer.observe(entry);
  }); }
  if (document.documentElement.classList.contains('boot-running')) {
    window.addEventListener('portfolio:ready', observeEntries, { once: true });
  } else {
    observeEntries();
  }

  function revealAll() {
    observer.disconnect();
    entries.forEach(entry => entry.classList.remove('reveal-pending'));
  }
  reducedMotion.addEventListener('change', event => {
    if (event.matches) revealAll();
  });
  window.addEventListener('beforeprint', revealAll);
})();
