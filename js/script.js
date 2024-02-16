const dataContainer = document.getElementById('data-container-cloth');
const searchApi = ``;

window.addEventListener('scroll', function () {
  var header = this.document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
});

var navBar = document.getElementById('navBar');

function showMenu() {
  const elem = document.querySelector('.fas-bars');
  elem.addEventListener('click', function () {
    navBar.style.left = '-15px';
  });
}

function hideMenu() {
  const elem = document.querySelector('.fa-times');
  elem.addEventListener('click', function () {
    navBar.style.left = '-300px';
  });
}

function updateCartAmount() {
  const countCartItem = document.getElementById('countCartItems');
  const cartItemAmount = JSON.parse(localStorage.getItem('cart')) || []; // Ensure it's an array
  countCartItem.textContent = cartItemAmount.length; // Update the cart item count
}

document.addEventListener('DOMContentLoaded', () => {
  hideMenu();
  showMenu();
  updateCartAmount();
});
