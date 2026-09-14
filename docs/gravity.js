/* Gravity interaction adapted for this static site from Fancy Components:
 * https://www.fancycomponents.dev/docs/components/physics/gravity
 * Matter.js bodies synchronize with HTML elements; pointer constraints provide dragging.
 */
(() => {
  const scene = document.querySelector('.gravity-scene');
  if (!scene || !window.Matter) return;
  const { Engine, Bodies, Body, Composite, Constraint, Sleeping } = window.Matter;
  const chips = [...scene.querySelectorAll('.tech-chip')];
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const engine = Engine.create({ enableSleeping: true, gravity: { x: 0, y: 1 } });
  let entries = [], frame = 0, last = 0, visible = false, paused = preference.matches;
  let drag = null, pointer = null, size = '', resizeFrame = 0;

  function sync() {
    entries.forEach(({ element, body, width, height }) => {
      element.style.transform = `translate(${body.position.x - width / 2}px, ${body.position.y - height / 2}px) rotate(${body.angle}rad)`;
    });
  }
  function release() {
    if (drag) Composite.remove(engine.world, drag);
    drag = null;
    if (pointer !== null && scene.hasPointerCapture(pointer)) scene.releasePointerCapture(pointer);
    pointer = null;
    scene.classList.remove('is-dragging');
  }
  function build() {
    release();
    Composite.clear(engine.world, false);
    Engine.clear(engine);
    const width = scene.clientWidth, height = scene.clientHeight;
    size = `${width}:${height}`;
    if (!width || !height) return;
    const wall = { isStatic: true, friction: 1 };
    Composite.add(engine.world, [
      Bodies.rectangle(width / 2, height + 25, width + 100, 50, wall),
      Bodies.rectangle(width / 2, -25, width + 100, 50, wall),
      Bodies.rectangle(-25, height / 2, 50, height + 100, wall),
      Bodies.rectangle(width + 25, height / 2, 50, height + 100, wall),
    ]);
    // Scatter across the entire scene instead of dropping in three vertical lanes.
    const lanes = chips.map((_, i) => i).sort((a, b) =>
      ((a * .618034) % 1) - ((b * .618034) % 1));
    entries = chips.map((element, i) => {
      const w = element.offsetWidth, h = element.offsetHeight;
      const margin = Math.hypot(w, h) / 2 + 8;
      const fraction = (lanes[i] + .5) / chips.length;
      const x = margin + fraction * Math.max(0, width - margin * 2);
      const y = margin + ((i * .381966) % 1) * Math.max(0, height * .75 - margin * 2);
      const body = Bodies.rectangle(x, y, w, h, {
        friction: .08, frictionStatic: .15, restitution: .65, frictionAir: .006,
        chamfer: { radius: h / 2 - 1 }, angle: (i % 5 - 2) * .16,
      });
      Body.setVelocity(body, { x: (fraction - .5) * 7, y: (i % 3) * .5 });
      Body.setAngularVelocity(body, (i % 2 ? 1 : -1) * .018);
      Composite.add(engine.world, body);
      return { element, body, width: w, height: h };
    });
    sync();
  }
  function loop(time) {
    if (!visible || paused || document.hidden) { frame = 0; return; }
    Engine.update(engine, Math.min(time - (last || time - 16.667), 1000 / 60));
    last = time;
    sync();
    frame = requestAnimationFrame(loop);
  }
  function update() {
    scene.classList.toggle('is-paused', paused);
    if (frame) cancelAnimationFrame(frame);
    frame = 0; last = 0;
    if (!paused && visible && !document.hidden) frame = requestAnimationFrame(loop);
  }
  function point(event) {
    const rect = scene.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }
  scene.addEventListener('pointerdown', event => {
    if (paused || pointer !== null || event.button !== 0) return;
    const entry = entries.find(item => item.element === event.target.closest('.tech-chip'));
    if (!entry) return;
    const p = point(event), b = entry.body;
    Sleeping.set(b, false);
    drag = Constraint.create({ pointA: p, bodyB: b,
      pointB: { x: p.x - b.position.x, y: p.y - b.position.y },
      stiffness: .2, damping: .1, length: 0 });
    Composite.add(engine.world, drag);
    pointer = event.pointerId;
    scene.setPointerCapture(pointer);
    scene.classList.add('is-dragging');
    event.preventDefault();
  });
  scene.addEventListener('pointermove', event => {
    if (drag && pointer === event.pointerId) drag.pointA = point(event);
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(name => scene.addEventListener(name, release));
  chips.forEach(element => element.addEventListener('keydown', event => {
    const entry = entries.find(item => item.element === element);
    if (!entry || paused || !['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(event.key)) return;
    event.preventDefault();
    Sleeping.set(entry.body, false);
    Body.setVelocity(entry.body, {
      x: event.key === 'ArrowLeft' ? -5 : event.key === 'ArrowRight' ? 5 : 0,
      y: event.key === 'ArrowDown' ? 3 : -7,
    });
  }));
  preference.addEventListener('change', event => { paused = event.matches; build(); update(); });
  document.addEventListener('visibilitychange', () => { release(); update(); });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting; if (!visible) release(); update();
  }, { threshold: .1 });
  const resizeObserver = new ResizeObserver(() => {
    if (size === `${scene.clientWidth}:${scene.clientHeight}`) return;
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => { build(); update(); });
  });
  document.fonts.ready.then(() => {
    scene.classList.add('gravity-ready');
    build(); update(); observer.observe(scene); resizeObserver.observe(scene);
  });
})();
