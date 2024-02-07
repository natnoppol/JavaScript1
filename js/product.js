const products = [];

// Function to fetch product data by ID
async function fetchProductById(id) {
  const res = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${id}`);
  return res.json();
}

// Function to render product details in the HTML
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
function isProductInCart(productId, color, size) {
  return products.some(
    (item) =>
      item.id === productId && item.color === color && item.size === size
  );
}

// Function to add a product to the cart
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
    if (isProductInCart(productId, selectedColor, selectedSize)) {
      // If yes, update the quantity of the existing product
      updateCartQuantity(
        productId,
        selectedColor,
        selectedSize,
        selectedQuantity
      );
    } else {
      // If not, add the product to the cart
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
function updateCartQuantity(productId, color, size, selectedQuantity) {
  const existingIndex = products.findIndex(
    (item) =>
      item.id === productId && item.color === color && item.size === size
  );
  products[existingIndex].quantity += selectedQuantity;
}

// Function to add a new product to the cart
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
function query() {
  const qstr = window.location.search;
  const url = new URLSearchParams(qstr);
  const id = url.get('id');

  return id;
}

// Initialization function to set up the page
async function init() {
  // Fetch product ID from URL query string
  const productId = query();
  // Fetch product details based on ID
  const product = await fetchProductById(productId);
  // Render product details in the HTML
  renderProduct(product);

  // Add event listener to 'Add To Cart' button
  const addToCartButton = document.getElementById('addToCart');
  addToCartButton.addEventListener('click', addToCart(product));
}

// Initialize the page
init();
