const dataContainer = document.getElementById("data-container-cloth");
const searchApi = ``;

window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})

var navBar = document.getElementById("navBar")

function showMenu() {
    const elem = document.querySelector('.fas-bars');
    elem.addEventListener('click', function () {
        navBar.style.left = "-15px";
    });
}

function hideMenu() {
    const elem = document.querySelector('.fa-times');
    elem.addEventListener('click', function () {
        navBar.style.left = "-300px";
    });
}

//update the number on cart relate to the item in the cart 
function updateCartAmount() {
    const countCartItem = document.getElementById('countCartItems');
    const cartItemAmount = JSON.parse(localStorage.getItem('cart')) || [];
    countCartItem.textContent.length;
}
document.addEventListener('DOMContentLoaded', () => {
    hideMenu();
    showMenu();
    updateCartAmount();
});

