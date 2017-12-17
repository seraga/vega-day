!(function () {
  const deadline = document.querySelector('.countdown').getAttribute('deadline');
  const d = document.querySelector('.countdown__days');
  const h = document.querySelector('.countdown__hours');
  const m = document.querySelector('.countdown__minutes');
  const s = document.querySelector('.countdown__seconds');

  setInterval(() => {
    const time = new Date(deadline) - new Date();
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60); // 1000 * 60 = 60000
    const hours = Math.floor((time / 3600000) % 24); // 1000 * 60 * 60 = 3600000
    const days = Math.floor(time / 86400000);        // 1000 * 60 * 60 * 24 = 86400000

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
  }, 1000);
})();
