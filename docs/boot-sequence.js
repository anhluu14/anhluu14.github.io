// Reveal terminal output before the profile, then the remaining sections.
(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || (location.hash && location.hash !== '#about')) return;

  root.classList.add('boot-running', 'profile-pending');
  const timers = [];
  let profileShown = false;
  let complete = false;
  function showProfile() {
    if (profileShown) return;
    profileShown = true;
    root.classList.remove('profile-pending');
    window.dispatchEvent(new Event('portfolio:profile-ready'));
  }
  function finish() {
    if (complete) return;
    complete = true;
    timers.forEach(clearTimeout);
    document.querySelectorAll('.boot-log-line').forEach(line => line.classList.add('boot-visible'));
    showProfile();
    root.classList.remove('boot-running');
    window.dispatchEvent(new Event('portfolio:ready'));
  }
  // A slow resource or interrupted animation must never leave the site hidden.
  timers.push(setTimeout(finish, 5000));
  document.addEventListener('DOMContentLoaded', () => {
    if (complete) return;
    const lines = [...document.querySelectorAll('.boot-log-line')];
    lines.forEach((line, index) => {
      timers.push(setTimeout(() => line.classList.add('boot-visible'), (index + 1) * 280));
    });
    timers.push(setTimeout(showProfile, lines.length * 280 + 350));
    timers.push(setTimeout(finish, lines.length * 280 + 950));
  }, { once: true });
  reducedMotion.addEventListener('change', event => { if (event.matches) finish(); });
  window.addEventListener('hashchange', finish, { once: true });
  window.addEventListener('pagehide', finish, { once: true });
  window.addEventListener('beforeprint', finish);
})();
