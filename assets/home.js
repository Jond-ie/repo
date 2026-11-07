(function () {
  // copy the repo address
  var copy = document.getElementById('copy');
  if (navigator.clipboard) {
    copy.hidden = false;
    copy.addEventListener('click', function () {
      navigator.clipboard.writeText(document.getElementById('repo-url').textContent).then(function () {
        copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy'; }, 1600);
      });
    });
  }

  // sileo:// and zbra:// only open on an iPhone or iPad
  var ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!ios) document.getElementById('desktop-note').hidden = false;

  // the island shrinks to a pill once you scroll past it, like the real one between activities
  var pill = document.getElementById('pill'), island = document.getElementById('top');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      pill.classList.toggle('on', !es[0].isIntersecting);
    }, { rootMargin: '-120px 0px 0px 0px' }).observe(island);
  }

  // the island is a carousel: the repo first, then each flagship. Swipe, use the arrows or dots (or Left/Right),
  // or let it move on every 7 s. It stops moving on its own once you use it, and never does with Reduce Motion on.
  var track = document.getElementById('slides'), dots = document.querySelectorAll('#dots button'), n = dots.length;
  var current = 0, timer = null, landing = null;
  function mark(i) {
    current = i;
    for (var k = 0; k < n; k++) dots[k].setAttribute('aria-current', k === i ? 'true' : 'false');
  }
  function go(i) { i = (i + n) % n; track.scrollTo({ left: i * track.clientWidth }); mark(i); }
  function stop() { clearInterval(timer); timer = null; }
  // the dot follows the slide once a swipe or scroll settles
  track.addEventListener('scroll', function () {
    clearTimeout(landing);
    landing = setTimeout(function () { mark(Math.round(track.scrollLeft / track.clientWidth)); }, 90);
  }, { passive: true });
  Array.prototype.forEach.call(dots, function (b, i) { b.addEventListener('click', function () { stop(); go(i); }); });
  document.getElementById('prev').addEventListener('click', function () { stop(); go(current - 1); });
  document.getElementById('next').addEventListener('click', function () { stop(); go(current + 1); });
  island.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); stop(); go(current + (e.key === 'ArrowRight' ? 1 : -1)); }
  });
  // a touch or a sideways scroll counts as using it; scrolling the page up and down over it does not
  track.addEventListener('touchstart', stop, { passive: true });
  track.addEventListener('wheel', function (e) { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) stop(); }, { passive: true });
  // keep the current slide in place when the window changes size
  window.addEventListener('resize', function () {
    track.style.scrollBehavior = 'auto'; track.scrollLeft = current * track.clientWidth; track.style.scrollBehavior = '';
  });
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!calm) timer = setInterval(function () {
    if (document.hidden || pill.classList.contains('on') || island.matches(':hover') || island.contains(document.activeElement)) return;
    go(current + 1);
  }, 7000);
})();
