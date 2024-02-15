const dataFromLocalStorage = localStorage.getItem('cart');
const parsedData = JSON.parse(dataFromLocalStorage);

if (dataFromLocalStorage !== null) {
  findDataLocalStorage(parsedData);
} else {
  console.log(1, "Found nothing");
}

function findDataLocalStorage(data) {
  console.log(2, "Find something", data);
}


function renderCart(item) {
  const dataCon = document.querySelector('#dataContainer');
  const productItem = parsedData.map(item =>

    `
          <div class="checkout-section">
            <div class="checkout-list">
              <p class="section-heading">Your cart</p>
              <div class="cart">
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
                  <button id="smDeleteButton" class="sm-delete-btn" data-product-id="${item.id}"> 
                  <img src="/photo/close.png" alt=""></button>
                </div>
              </div>
            </div>
            <div class="order-summary">
              <div class="order-box">
                <p class="text">your total bill</p>
                <h1 class="bill">${item.price} NOK.</h1>
                <a href="/checkout/confirmation/index.html" class="checkout-btn">Checkout</a>
              </div>
            </div>
          </div>
   
    `

  )
  dataCon.innerHTML = productItem.join('')
}

// Use when html loaded  before use function renderCart()
document.addEventListener('DOMContentLoaded', () => {
  renderCart(parsedData)

  // function deleteProduct() when click on delete button
  const deleteButton = document.getElementById('smDeleteButton');
  deleteButton.addEventListener('click', function () {
    const productId = this.dataset.productId;
    deleteProduct(productId);

  });
})

function deleteProduct(productId) {
  const index = parsedData.findIndex(product => product.id === productId)
  if (index !== -1) {
    parsedData.splice(index, 1);
    renderCart(parsedData);

  } else {

  }
}

localStorage.clear();





// add to Cart div 
// <img src="/photo/empty-cart.png" class="empty-img" alt="">