const dataContainer = document.getElementById("data-container-cloth");
const searchApi = ``;

const mediaQuery = window.matchMedia ('(max-width:768)')
const navBar = document.getElementById("navBar");

function showMenu() {
  const elem = document.querySelector(".fas-bars");
  elem.addEventListener("click", function () {
    navBar.style.left = "-15px";
  });
}

function hideMenu() {
  const elem = document.querySelector(".fa-times");
  elem.addEventListener("click", function () {
    navBar.style.left = "-300px";
  });
}

//update the number on cart relate to the item in the cart
function updateCartAmount() {
  const countCartItem = document.getElementById("countCartItems");
  // If not find data in local storage then create an emty array object
  const cartItemAmount = JSON.parse(localStorage.getItem("cart")) || [];
  // Get number of cart item to update/display on cart icon 
  countCartItem.textContent = cartItemAmount.length;
}
function hideLoading (){
  document.getElementById('hideLoading').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    // check the device size that have max-width: 768px run the function below 
  if (mediaQuery) {
    hideMenu();
    showMenu();
  }
  updateCartAmount();
});



