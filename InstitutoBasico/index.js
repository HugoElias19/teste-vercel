document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar nav');

    toggleButton.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });