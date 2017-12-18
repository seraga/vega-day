!(function () {
  const deadline = document.querySelector('.countdown').getAttribute('data-deadline');
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

    if (days.toString().length === 1) days = '0' + days.toString();
    if (hours.toString().length === 1) hours = '0' + hours.toString();
    if (minutes.toString().length === 1) minutes = '0' + minutes.toString();
    if (seconds.toString().length === 1) seconds = '0' + seconds.toString();

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
  }, 1000);
})();
