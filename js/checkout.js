const dataFromLocalStorage = localStorage.getItem('cart');
const parsedData = JSON.parse(dataFromLocalStorage);

if (dataFromLocalStorage !== null) {
  getDataFromLocalStorage(parsedData);
} else {
  console.log(1, 'Found nothing');
}

function getDataFromLocalStorage(data) {
  console.log(2, 'Find something', data);
}

function renderCart() {
  const dataCon = document.querySelector('#dataContainer');
  if (parsedData) {
    const productItem = parsedData.map(
      (item) => `
        <div class="sm-product">
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
              data-product-size="${item.size}"     data-product-color="${item.color}"> 
            <img src="/photo/close.png" alt="" 
              data-product-id="${item.id}" 
              data-product-size="${item.size}" 
              data-product-color="${item.color}"
            />
          </button>
        </div>`
    );
    dataCon.innerHTML = productItem.join('');
  } else {
    dataCon.innerHTML = 'You have no products in cart';
  }
  deleteHandler();
}

// Use when html loaded  before use function renderCart()
document.addEventListener('DOMContentLoaded', async () => {
  if (parsedData.length > 0) {
    renderCart(parsedData);
  } else {
    const dataCon = document.querySelector('#dataContainer');
    dataCon.innerHTML = 'You have no products in cart';
  }
});

function deleteProduct(productId, productSize, productColor) {
  const index = parsedData.findIndex(
    (product) =>
      product.id === productId &&
      product.size === productSize &&
      product.color === productColor
  );
  console.log(4, index);
  if (index !== -1) {
    parsedData.splice(index, 1);
    renderCart(parsedData);
    localStorage.setItem('cart', JSON.stringify(parsedData));
  } else {
    renderCart(parsedData);
  }
  if (parsedData.length === 0) {
    const dataCon = document.querySelector('#dataContainer');
    dataCon.innerHTML = 'You have no products in cart';
  }
  updateCartAmount();
}

function deleteHandler() {
  document.addEventListener('click', function (evt) {
    const productId = evt.target.dataset.productId;
    const productSize = evt.target.dataset.productSize;
    const productColor = evt.target.dataset.productColor;
    if (productId) deleteProduct(productId, productSize, productColor);
  });
}

function updateCartAmount() {
  const countCartItem = document.getElementById('countCartItems');
  const cartItemAmount = JSON.parse(localStorage.getItem('cart')) || []; // Ensure it's an array
  countCartItem.textContent = cartItemAmount.length; // Update the cart item count
}
