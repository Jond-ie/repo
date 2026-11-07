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
})();
