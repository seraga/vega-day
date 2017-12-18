!(() => {
  document.querySelector('.navigation__toggle').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.navigation').classList.toggle('navigation--dropdown');
  });
  document.querySelectorAll('.navigation__link').forEach(e => {
    e.addEventListener('click', () => {
      document.querySelector('.navigation').classList.remove('navigation--dropdown');
    });
  });
  //===============================================================
  const allLinks = document.querySelectorAll('.navigation__link');
  const allElements = [];

  allLinks.forEach(element => {
    if (element.hash) {
      allElements.push(document.querySelector(element.hash));
    }
  });

  let scrollBody_prev = 0;
  let activeLink = document.querySelector('.navigation__link--active');
  //---------------------------------------------
  window.addEventListener('scroll', () => {

    const scrollBody = document.body.scrollTop;
    const scrollDown = scrollBody > scrollBody_prev;
    scrollBody_prev = scrollBody;

    allElements.forEach(el => {
      const r = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight;
      const h_2 = h / 2;

      if (r.top <= h_2 && r.top >= -2 && scrollDown
          || r.bottom >= h_2 && r.bottom <= h && !scrollDown) {

        let id = document.querySelector('.navigation__link--active').getAttribute('href').slice(1);

        if (id !== el.id) {
          activeLink.classList.remove('navigation__link--active');
          activeLink = document.querySelector(`[href="#${el.id}"]`);
          activeLink.classList.add('navigation__link--active');
        }
      }
    });
  });
  //-----------------------------------------------
})();
