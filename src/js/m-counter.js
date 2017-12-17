
!(function () {
  function animateValue(id) {
    const MIN_STEP_TIME = 50; // 50...200 ms
    const START = id.counter.start;
    const END = id.counter.end;
    const DURATION = id.counter.duration;
    const DECIMALS = id.counter.decimals;
    const LOCALE = id.counter.locale;
    const PREFIX = id.counter.prefix;
    const POSTFIX = id.counter.postfix;

    const timing = {
      'linear': k => k,
      'ease-in': k => Math.pow(k, 1.618),
      'ease-out': k => 1 - Math.pow(1 - k, 1.618),
      'ease-in-out': k => 0.5 * (Math.sin((k - 0.5) * Math.PI) + 1)
    };

    const RANGE = Math.abs(END - START);
    let stepTime = Math.floor(DURATION / RANGE);

    if (stepTime < MIN_STEP_TIME) stepTime = MIN_STEP_TIME;

    const ALL_STEPS = Math.floor(DURATION / stepTime);
    const DIRECTION = END > START ? 1 : -1;
    let curentStep = 0;

    const TIMER_ID = setInterval(function () {

      requestAnimationFrame(() => {
        curentStep += Math.abs(DIRECTION);
        let k = curentStep / ALL_STEPS;
        let curentValue = START + timing['ease-out'](k) * RANGE * DIRECTION;

        if (LOCALE) {

          try {
            let formatter = new Intl.NumberFormat(LOCALE);
            id.innerHTML = PREFIX + formatter.format(curentValue.toFixed(DECIMALS)) + POSTFIX;
          }
          catch(e) {
            // console.log('Invalid argument in "locale"');
            let formatter = new Intl.NumberFormat();
            id.innerHTML = PREFIX + formatter.format(curentValue.toFixed(DECIMALS)) + POSTFIX;
          }


        } else {
          id.innerHTML = PREFIX + curentValue.toFixed(DECIMALS) + POSTFIX;
        }


        if (k === 1) { clearInterval(TIMER_ID); }
      });

    }, stepTime);
  }
//======================================================





  const doIt = true;
  const els = document.querySelectorAll('.js.counter');
  // Init
  els.forEach(el => {
    el.counter = {
      start: +el.getAttribute('start') || 0,
      end: +el.getAttribute('end') || +el.innerHTML.match(/\d+/) || 100,
      duration: +el.getAttribute('duration') || 2000,
      decimals: +el.getAttribute('decimals') || 0,
      locale: el.getAttribute('locale'),
      prefix: el.getAttribute('prefix') || '',
      postfix: el.getAttribute('postfix') || '',
      doIt: doIt,
    }
    el.innerHTML = el.counter.prefix
        + el.counter.start.toFixed(el.counter.decimals)
        + el.counter.postfix ;
  });

  window.addEventListener('scroll', function () {
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      const h = document.documentElement.clientHeight;
      if (r.bottom < h && r.top > 0) {
        if (el.counter.doIt) {
          el.counter.doIt = !el.counter.doIt;
          animateValue(el);
        }
      }
    });
  });
})();
//======================================================
