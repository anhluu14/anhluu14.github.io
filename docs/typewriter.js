// Static-site adaptation of Fancy Components' single-string Typewriter behavior.
// https://www.fancycomponents.dev/docs/components/text/typewriter
(() => {
  const name = document.querySelector('[data-typewriter]');
  if (!name) return;
  const text = name.querySelector('.name-typed');
  const fullName = name.dataset.typewriter;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let timer;
  function finish() {
    clearTimeout(timer);
    text.textContent = fullName;
    name.classList.remove('is-typing');
  }
  function start() {
    clearTimeout(timer);
    if (reducedMotion.matches) { finish(); return; }
    const letters = Array.from(fullName);
    let index = 0;
    text.textContent = '';
    name.classList.add('is-typing');
    function type() {
      text.textContent = letters.slice(0, ++index).join('');
      timer = setTimeout(index < letters.length ? type : finish, index < letters.length ? 95 : 1400);
    }
    timer = setTimeout(type, 220);
  }
  reducedMotion.addEventListener('change', finish);
  window.addEventListener('pagehide', finish);
  start();
})();
