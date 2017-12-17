!(function () {
  const allGalleryItems = document.querySelectorAll('.gallery-item');
  const allModals = document.querySelectorAll('.modal');
  const allCloseElements = document.querySelectorAll('.modal__close');

  // When the user clicks on '.gallery-item', display the modal
  allGalleryItems.forEach(el => {
    el.addEventListener('click', () => {
      let modalId = el.getAttribute('data-modal');
      let modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });

  // When the user clicks on <span> (x), close the modal
  allCloseElements.forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.parentElement.style.display = 'none';
    });
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', event => {
    allModals.forEach(el => {
      if (event.target === el) el.style.display = "none";
    });
  });
})();
