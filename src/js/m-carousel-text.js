!(() => {
  window.addEventListener('load', carouselText);

  function carouselText() {
    const allTexts = document.querySelectorAll('.carousel__text');
    allTexts.forEach(el => {
      el.classList.remove('dn');
    })
  }
})()
