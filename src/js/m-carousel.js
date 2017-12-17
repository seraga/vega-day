!(function carousel(){
    const duration = 5000,
        transition = 500,
        showButtons = false,
        showIndicators = true,
        first = 0; // first slide position

    let l_carousel,
        items,
        indicators,
        btnLeft,
        btnRight,
        active = first, // on top slide position
        future,         // future slide position
        toitem,         // future slide position after jump to exact position with help of to(a)
        sliding = false,
        itr = null;     // interval


    init();
    run();
    // -----------------------------------------------
    // keydown()
    // -----------------------------------------------
    function keydown() {}
    // -----------------------------------------------
    // init()
    // -----------------------------------------------
    function init() {
        l_carousel = document.querySelector('.carousel');
        items = document.querySelectorAll('.carousel__inner > *');
        btnLeft = document.querySelector('.carousel__control--left');
        btnRight = document.querySelector('.carousel__control--right');
        // ---------------------------create indicators --------------------
        let e = document.createElement('ol');
        if (!showIndicators) e.style.display = 'none';
        e.classList = 'carousel__indicators';

        let inner = '';
        items.forEach((_notused, i) => inner += '<li ikey="' + i + '"></li>\n');
        e.innerHTML = inner;
        l_carousel.appendChild(e);
        indicators = Array.from(e.children);
        indicators[active].classList.add('carousel__active-indicator');
        indicators.forEach(e => e.addEventListener('click', (event) => to(Number(event.target.getAttribute('ikey'))), false));
        // ------------------------------------------------------------------
        items[active].classList.add('carousel__active');
        items.forEach(e => e.style.animationDuration = transition + 'ms');
        // ------------------------------------------------------------------
        l_carousel.addEventListener('mouseenter', pause, false);
        l_carousel.addEventListener('mouseleave', run, false);
        if (btnLeft) btnLeft.addEventListener('click', prev, false);
        if (btnRight) btnRight.addEventListener('click', next, false);
        if (!showButtons) {
            btnLeft && (btnLeft.style.display = 'none');
            btnRight && (btnRight.style.display = 'none');
        }
    }
    // -----------------------------------------------
    // run()
    // -----------------------------------------------
    function run() {itr = setInterval(next, duration);}
    // -----------------------------------------------
    // pause()
    // -----------------------------------------------
    function pause() {clearInterval(itr);}
    // -----------------------------------------------
    // prev()
    // -----------------------------------------------
    function prev() {
        if (sliding) return;
        future = (active - 1 + items.length) % items.length;
        setIndicator(future);
        items[active].classList.add('-right');
        items[future].classList.add('carousel__prev', '-right');
        toitem = undefined;
        animate();
    }
    // -----------------------------------------------
    // next()
    // -----------------------------------------------
    function next() {
        if (sliding) return;
        future = toitem || (active + 1 + items.length) % items.length;
        setIndicator(future);
        items[active].classList.add('-left');
        items[future].classList.add('carousel__next', '-left');
        toitem = undefined;
        animate();
    }
    // -----------------------------------------------
    // to(a)
    // -----------------------------------------------
    function to(a) {
        if (sliding || a === active) return;

        if ( a > active) {
            future = a;
            setIndicator(future);
            items[active].classList.add('-left');
            items[future].classList.add('carousel__next', '-left');
        } else if ( a < active ) {
            future = a;
            setIndicator(future);
            items[active].classList.add('-right');
            items[future].classList.add('carousel__prev', '-right');
        }
        toitem = (future + 1 + items.length) % items.length; // for rtl;
        animate();
    }
    // -----------------------------------------------
    // animate()
    // -----------------------------------------------
    function animate() {
        sliding = true;
        setTimeout(() => {
            items[active].classList.remove('carousel__active', '-left', '-right');
            items[future].classList.remove('carousel__next', 'carousel__prev', '-left', '-right');
            items[future].classList.add('carousel__active');
            active = future;
            sliding = false;
        }, transition);
    }
    // -----------------------------------------------
    // setIndicator(a)
    // -----------------------------------------------
    function setIndicator(a) {
        indicators[active].classList.remove('carousel__active-indicator');
        indicators[a].classList.add('carousel__active-indicator');
    }
}
)();
