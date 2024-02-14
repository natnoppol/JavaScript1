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
                  <div class="item-counter">
                    <button class="counter-btn decrement">-</button>
                    <p class="item-count">1</p>
                    <button class="counter-btn increment">+</button>
                  </div>
                  <p class="sm-price">${item.price} NOK.</p>
                  <button class="sm-delete-btn"> <img src="/photo/close.png" alt=""></button>
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

  console.log(1, dataCon);

}




// ใช้ เพื่อรอให้ หน้าเว็บโหลดเสร็จสมบูรณ์ ก่อนที่จะเรียกใช้ฟังก์ชัน renderCart()
document.addEventListener('DOMContentLoaded', () => {
  renderCart(parsedData)
})



// add to Cart div 
// <img src="/photo/empty-cart.png" class="empty-img" alt="">