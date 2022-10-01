window.addEventListener('DOMContentLoaded', (event) => {
  const burgerIcon = document.querySelector('.burger-icon')
  const sidebar = document.querySelector('.sidebar')
  const overlay = document.querySelector('.overlay-bg')
  const closeButton = document.querySelector('.close-button')
  burgerIcon.addEventListener('click', () => {
    sidebar.classList.add('navbar-active')
    overlay.classList.add('navbar-active')
  });
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('navbar-active')
    overlay.classList.remove('navbar-active')
  });
});