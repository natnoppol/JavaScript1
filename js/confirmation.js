//sync cartIcon ให้เลขอัพเดททุกหน้า 

//update the number on cart relate to the item in the cart
function updateCartAmount() {
    const countCartItem = document.getElementById("countCartItems");
    // If not find data in local storage then create an emty array object
    const cartItemAmount = JSON.parse(localStorage.getItem("cart")) || [];
    // Get number of cart item to update/display on cart icon 
    countCartItem.textContent = cartItemAmount.length;
  }

document.addEventListener('DOMContentLoaded', () =>{
    updateCartAmount()

    //clear local storage 
    localStorage.clear();
})
