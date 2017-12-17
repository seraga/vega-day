!(function () {
  const deadline = document.querySelector('.countdown').getAttribute('deadline');
  const d = document.querySelector('.countdown__days');
  const h = document.querySelector('.countdown__hours');
  const m = document.querySelector('.countdown__minutes');
  const s = document.querySelector('.countdown__seconds');

  setInterval(() => {
    const time = new Date(deadline) - new Date();
    let days    = Math.floor(time / 86400000);        // 1000 * 60 * 60 * 24 = 86400000
    let hours   = Math.floor((time / 3600000) % 24);  // 1000 * 60 * 60 = 3600000
    let minutes = Math.floor((time / 60000) % 60);    // 1000 * 60 = 60000
    let seconds = Math.floor((time / 1000) % 60);

    if (time < 0) {
      days    = 0;
      hours   = 0;
      minutes = 0;
      seconds = 0;
    }

    d.innerHTML = days.toString().padStart(2,'0');
    h.innerHTML = hours.toString().padStart(2,'0');
    m.innerHTML = minutes.toString().padStart(2,'0');
    s.innerHTML = seconds.toString().padStart(2,'0');
  }, 1000);
})();
