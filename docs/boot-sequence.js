// Reveal terminal output before the profile, then the remaining sections.
(() => {
  const root = document.documentElement;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches || (location.hash && location.hash !== '#about')) return;

  root.classList.add('boot-running', 'profile-pending');
  const timers = [];
  let profileShown = false;
  let complete = false;
  let started = false;
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
  function start() {
    if (complete || started || document.visibilityState === 'hidden') return;
    started = true;
    // Start the watchdog with the animation, not while mobile resources load.
    timers.push(setTimeout(finish, 5000));
    const lines = [...document.querySelectorAll('.boot-log-line')];
    lines.forEach((line, index) => {
      timers.push(setTimeout(() => line.classList.add('boot-visible'), (index + 1) * 280));
    });
    timers.push(setTimeout(showProfile, lines.length * 280 + 350));
    timers.push(setTimeout(finish, lines.length * 280 + 950));
  }
  function whenReady() {
    start();
    document.addEventListener('visibilitychange', start);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', whenReady, { once: true });
  } else {
    whenReady();
  }
  function onMotionChange(event) { if (event.matches) finish(); }
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionChange);
  else if (reducedMotion.addListener) reducedMotion.addListener(onMotionChange);
  window.addEventListener('hashchange', finish, { once: true });
  window.addEventListener('pagehide', finish, { once: true });
  window.addEventListener('beforeprint', finish);
})();
