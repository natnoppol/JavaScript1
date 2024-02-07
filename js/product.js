const products = [];

// Function to fetch product data by ID
// ฟังก์ชันเพื่อดึงข้อมูลสินค้าตามรหัส
async function fetchProductById(id) {
  const res = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${id}`);
  return res.json();
}

// Function to render product details in the HTML
// ฟังก์ชันเพื่อแสดงรายละเอียดสินค้าใน HTML
function renderProduct(product) {
  const cont = document.querySelector('#data-container');
  const render = `
    <div class="product-img">
      <img src="${product.image}"></img>
    </div>
    <div class="product-detail"> 
      <h1>${product.title}</h1>
      <h3>${product.price} NOK.</h3>
      <select id="mySelect">
        <option>Select Size</option>
        ${product.sizes.map((size) => `<option>${size}</option>`).join('')}
      </select>
      <select id="mySelectColor">
        <option>Color</option>
        <option>${product.baseColor}</option>
      </select>
      <input type="number" id="mySelectNumber" value="1">
      <button id="addToCart" class="normal">Add To Cart</button>
      <h4>Product Detail</h4>
      <span>${product.description}</span>
      <br>
    </div>`;
  cont.innerHTML = render;
}

// Function to check if a product with given ID, color, and size is already in the cart
// ฟังก์ชันเพื่อตรวจสอบว่าสินค้าที่มีรหัสสินค้าเดียวกัน สีเดียวกัน และขนาดเดียวกันมีอยู่ในตะกร้าแล้วหรือไม่
function isProductInCart(productId, color, size) {
  return products.some(
    (item) =>
      item.id === productId && item.color === color && item.size === size
  );
}

// Function to add a product to the cart
// ฟังก์ชันเพื่อเพิ่มสินค้าลงในตะกร้า
function addToCart(product) {
  return async () => {
    const selectElement = document.getElementById('mySelect');
    const colorElement = document.getElementById('mySelectColor');
    const numberElement = document.getElementById('mySelectNumber');

    const selectedSize = selectElement.value;
    const selectedColor = colorElement.value;
    const selectedQuantity = parseInt(numberElement.value);

    const productId = product.id;

    // Check if the product with the same ID, color, and size is already in the cart
    // ตรวจสอบว่าสินค้าที่มีรหัสสินค้าเดียวกัน สีเดียวกัน และขนาดเดียวกันมีอยู่ในตะกร้าแล้วหรือไม่
    if (isProductInCart(productId, selectedColor, selectedSize)) {
      // If yes, update the quantity of the existing product
      // ถ้าใช่ ให้อัปเดตปริมาณของสินค้าที่มีอยู่แล้ว
      updateCartQuantity(
        productId,
        selectedColor,
        selectedSize,
        selectedQuantity
      );
    } else {
      // If not, add the product to the cart
      // ถ้าไม่ใช่ เพิ่มสินค้าลงในตะกร้า
      addProductToCart(
        productId,
        product.title,
        product.price,
        selectedColor,
        selectedSize,
        selectedQuantity
      );
    }

    console.log('Updated products:', products);
  };
}

// Function to update quantity of an existing product in the cart
// ฟังก์ชันเพื่ออัปเดตปริมาณของสินค้าที่มีอยู่ในตะกร้า
function updateCartQuantity(productId, color, size, selectedQuantity) {
  const existingIndex = products.findIndex(
    (item) =>
      item.id === productId && item.color === color && item.size === size
  );
  products[existingIndex].quantity += selectedQuantity;
}

// Function to add a new product to the cart
// ฟังก์ชันเพื่อเพิ่มสินค้าใหม่ลงในตะกร้า
function addProductToCart(id, title, price, color, size, quantity) {
  products.push({
    id,
    title,
    price,
    color,
    size,
    quantity,
  });
}

// Function to extract the ID from the URL query string
// ฟังก์ชันเพื่อแยกรหัสสินค้าจากสตริงคิวรี URL
function query() {
  const qstr = window.location.search;
  const url = new URLSearchParams(qstr);
  const id = url.get('id');

  return id;
}

// Initialization function to set up the page
// ฟังก์ชันเริ่มต้นเพื่อตั้งค่าหน้าเว็บ
async function init() {
  // Fetch product ID from URL query string
  // ดึงรหัสสินค้าจากสตริงคิวรี URL
  const productId = query();
  // Fetch product details based on ID
  // ดึงรายละเอียดสินค้าจากรหัสสินค้า
  const product = await fetchProductById(productId);
  // Render product details in the HTML
  // แสดงรายละเอียดสินค้าใน HTML
  renderProduct(product);

  // Add event listener to 'Add To Cart' button
  // เพิ่มตัวหมุนเพื่อคลิกปุ่ม 'Add To Cart'
  const addToCartButton = document.getElementById('addToCart');
  addToCartButton.addEventListener('click', addToCart(product));
}

// Initialize the page
// เริ่มต้นหน้าเว็บ
init();
