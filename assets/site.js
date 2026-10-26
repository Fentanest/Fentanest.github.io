(() => {
  'use strict';
  const dialog = document.getElementById('image-dialog');
  const image = document.getElementById('dialog-image');
  const caption = document.getElementById('dialog-caption');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  let lastTrigger = null;
  for (const trigger of document.querySelectorAll('[data-lightbox]')) {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      lastTrigger = trigger;
      image.src = trigger.href;
      image.alt = trigger.querySelector('img')?.alt || '';
      caption.textContent = trigger.dataset.caption || image.alt;
      dialog.showModal();
      document.body.classList.add('body-dialog-open');
    });
  }
  function close() { dialog.close(); }
  dialog.querySelector('.dialog-close').addEventListener('click', close);
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('body-dialog-open');
    lastTrigger?.focus();
    image.removeAttribute('src');
  });
})();
