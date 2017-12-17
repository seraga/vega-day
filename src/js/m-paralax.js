;(function () {
  const els = document.querySelectorAll('.js.paralax');
  window.addEventListener('scroll', function () {
    els.forEach(el => {
      const speed = 0.2;
      const r = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight;
      if (r.top < h && r.bottom > 0) { // element is in the viewport (or part of it)
        el.style.backgroundPositionY = Math.floor(r.top * speed) + 'px';
      }
    });
  });
})();
