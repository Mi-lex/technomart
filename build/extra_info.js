'use strict';

(function modalHandlers() {
  var formShowBtn = document.querySelector('.form_pop_up'),
      mapShowFrame = document.querySelector('.yandex_map'),
      modalMap = document.querySelector('.modal_map'),
      modalForm = document.querySelector('.modal_form'),
      ESC_CODE = 27;

  // Closes modal if user's target is close button or modal overlay.
  function onModalClickHandler(e) {
    if (e.target.className == e.currentTarget.className || e.target.className == 'close_btn') {
      e.preventDefault();
      e.currentTarget.style.display = 'none';
    }
  }

  modalMap.addEventListener('click', onModalClickHandler);
  modalForm.addEventListener('click', onModalClickHandler);

  formShowBtn.addEventListener('click', function () {
    modalForm.style.display = 'block';
  });

  mapShowFrame.addEventListener('click', function () {
    modalMap.style.display = 'block';
  });

  // Closes map pop-up if user presses ESC and pop up is active
  window.onkeydown = function (e) {
    if (modalMap.style.display == 'block' && e.keyCode == ESC_CODE) {
      modalMap.style.display = 'none';
    }
  };
})();