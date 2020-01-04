'use strict';

(function servicesHandler() {
  var services = document.querySelectorAll('.service'),
      serviceControls = document.querySelectorAll('.services_menu button');

  function showService(n) {
    if (services[n].classList.contains('acrive')) return;
    Array.prototype.forEach.call(serviceControls, function (el, i) {
      el.classList.remove('active');
      services[i].style.display = 'none';
    });

    services[n].style.display = 'block';
    serviceControls[n].classList.add('active');
  }

  Array.prototype.forEach.call(serviceControls, function (el, i) {
    el.addEventListener('click', function () {
      showService(i);
    });
  });
})();