// Adapted from KataTNT/portfolio's hero-boot.tsx and page.tsx sequence.
(() => {
  const root = document.documentElement;
  root.classList.add('boot-running', 'profile-pending');
  const timers = [];
  let complete = false;
  let started = false;
  let profileShown = false;
  const later = (fn, delay) => timers.push(setTimeout(fn, delay));
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
  function revealWindows() {
    const windows = [...document.querySelectorAll('.terminal-main > section:not(#about)')];
    windows.forEach((section, index) => {
      later(() => section.classList.add('boot-window-visible'), index * 200);
    });
    later(finish, Math.max(0, windows.length - 1) * 200);
  }
  function start() {
    if (complete || started || document.visibilityState === 'hidden') return;
    started = true;
    const lines = [...document.querySelectorAll('.boot-log-line')];
    let visible = 0;
    function nextLine() {
      if (visible < lines.length) {
        later(() => {
          lines[visible++].classList.add('boot-visible');
          nextLine();
        }, 280);
      } else {
        later(() => { showProfile(); later(revealWindows, 600); }, 350);
      }
    }
    nextLine();
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
  window.addEventListener('hashchange', finish, { once: true });
  window.addEventListener('pagehide', finish, { once: true });
  window.addEventListener('beforeprint', finish);
})();
