const dataContainer = document.getElementById('data-container-cloth');

// Define the media query
const mediaQuery = window.matchMedia('(max-width: 768px)');

window.addEventListener('scroll', function () {
  const header = this.document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 50);
});

const navBar = document.getElementById('navBar');

function showMenu() {
  const elem = document.querySelector('.fa-bars');
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

//update the number on cart relate to the item in the cart
function updateCartAmount() {
  const countCartItem = document.getElementById('countCartItems');
  const cartItemAmount = JSON.parse(localStorage.getItem('cart')) || [];
  countCartItem.textContent = cartItemAmount.length;
}
document.addEventListener('DOMContentLoaded', () => {
  if (mediaQuery) {
    hideMenu();
    showMenu();
  }
  updateCartAmount();
});
