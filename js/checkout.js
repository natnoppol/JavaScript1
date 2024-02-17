//Get data from cart in script.js
const dataFromLocalStorage = localStorage.getItem("cart");
//convert to JSON object 
const parsedData = JSON.parse(dataFromLocalStorage);

if (dataFromLocalStorage !== null) {
  findDataLocalStorage(parsedData);
} else {
}

function findDataLocalStorage(data) {
}

function renderCart() {
  const dataCon = document.querySelector("#dataContainer");
  if (parsedData) {
    const productItem = parsedData.map(
      (item) => `
      <div class = "sm-product">
       <img src="${item.image}"></img>
          <div class="sm-text">
            <p class="sm-product-name">${item.title}</p>
            <p class="sm-des">${item.description}</p>
      </div>
      <div class="item-con">
            <div class="item-col">${item.color}</div>
            <div class="item-size">${item.size}</div>
            <div class="item-quantity">${item.quantity}</div>
          </div>
          <p class="sm-price">${item.price} NOK.</p>
          <button class="sm-delete-btn" 
              data-product-id="${item.id}" 
              data-product-size="${item.size}"     
              data-product-color="${item.color}"> 
            <img src="/photo/close.png" alt="" 
              data-product-id="${item.id}" 
              data-product-size="${item.size}" 
              data-product-color="${item.color}"
            />
          </button>
        </div>`
    );
    dataCon.innerHTML = productItem.join("");
  } else {
    dataCon.innerHTML = "You have no products in cart";
  }
  deleteHandler();
}

// (CALL) Use when html loaded  before use function renderCart()
document.addEventListener("DOMContentLoaded", async () => {
  if (parsedData.length > 0) {
    renderCart();
  } else {
    const dataCon = document.querySelector("#dataContainer");
    dataCon.innerHTML = "You have no products in cart";
  }
});

// function deleteProduct() when click on delete button
function deleteProduct(productId, productSize, productColor) {
  // findIndex = find data in Array when not found = return -1
  const index = parsedData.findIndex(
    (product) =>
      product.id === productId &&
      product.size === productSize &&
      product.color === productColor
  );
  // Delete data(index=position of item  in Array, 1 = quantity)
  if (index !== -1) {
    parsedData.splice(index, 1);
    renderCart();
    //Convert data from object/array to string and store in localStorage
    localStorage.setItem("cart".JSON.stringify(parsedData));
  } else {
    renderCart();
  }

  if (parsedData.length === 0) {
    const dataCon = document.querySelector("#dataContainer");
    dataCon.innerHTML = "You have no products in cart";
  }

  // delete and then update the number that show on cart icon
  updateCartAmount();
}

// function that manage when user click,delete item and then do another action that relate to action after delete item

function deleteHandler() {
  document.addEventListener("click", function (event) {
    const productId = event.target.dataset.productId;
    const productSize = event.target.dataset.productSize;
    const productColor = event.target.dataset.productColor;
    if (productId) {
    }
    // Call
    deleteProduct(productId, productSize, productColor);
  });
}

//update the number on cart relate to the item in the cart
function updateCartAmount() {
  const countCartItem = document.getElementById("countCartItems");
  const cartItemAmount = JSON.parse(localStorage.getItem("cart")) || [];
  countCartItem.textContent = cartItemAmount.length;
}
