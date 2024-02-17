let products = [];
if (isLocalStorageExist()) {
  products = JSON.parse(localStorage.getItem('cart'));
}

// Function to extract the ID from the URL query string
const query = () => {
  const qstr = window.location.search;
  const url = new URLSearchParams(qstr);
  const id = url.get('id');
  return id;
};

// Check if there is any items in localStorage
function isLocalStorageExist() {
  const cartInLocalStorage = JSON.parse(localStorage.getItem('cart'));
  if (!cartInLocalStorage) return false;
  if (cartInLocalStorage.length > 0) return true;
}

// Function to add a new product to the cart
function addProductToCart(productProp) {
  products.push({
    id: productProp.id,
    image: productProp.image,
    description: productProp.description,
    title: productProp.title,
    price: productProp.price,
    color: productProp.color,
    size: productProp.size,
    quantity: productProp.quantity,
  });
}

function updateCartAmount() {
  const countCartItem = document.getElementById('countCartItems');
  countCartItem.textContent = products.length;
}

// Function to fetch product data by ID
async function fetchProductById(id) {
  const res = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${id}`);

  return res.json();
}

// Function to render product details in the HTML
function renderProduct(item) {
  const productContainer = document.querySelector('#data-container');
  const render = `
  <div class="product-img">
    <img src="${item.image}"></img>
  </div>
  <div class="product-detail"> 
    <h1>${item.title}</h1>
    <h3>${item.price} NOK.</h3>
    <select id="mySelect">
      <option>Select Size</option>
      ${item.sizes.map((size) => `<option>${size}</option>`)}
    </select>
    <select id="mySelectColor">
      <option>Color</option>
      <option>${item.baseColor}</option>
    </select>
    <input type="number" id="mySelectNumber" value="1">
    <button id="addToCart" class="normal">Add To Cart</button>
    <h4>Product Detail</h4>
    <span>${item.description}</span>
    <br>
  </div>`;
  productContainer.innerHTML = render;
}
// Function to check if a product with given ID, color, and size is already in the cart
// Loop through each product in the cart
function isProductInCart(productId, color, size) {
  // Check if the current product matches the provided ID, color, and size
  for (const product of products) {
    return (
      product.id === productId &&
      product.color === color &&
      product.size === size
    );
  }
  return false; // If not found, return false
}

// Function to update quantity of an existing product in the cart
function updateCartQuantity(productId, color, size, selectedQuantity) {
  // Loop through each product in the cart
  for (const product of products) {
    if (
      product.id === productId &&
      product.color === color &&
      product.size === size
    ) {
      product.quantity += selectedQuantity;
      break;
    }
  }
}

// Function to add a product to the cart
function addToCart(product) {
  return () => {
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
      const productProps = {
        ...product,
        id: productId,
        color: selectedColor,
        size: selectedSize,
        quantity: selectedQuantity,
      };

      addProductToCart(productProps);
    }
    localStorage.setItem('cart', JSON.stringify(products));
    updateCartAmount();
  };
}

// Initialization function to set up the page
async function init() {
  const id = query();
  const productItem = await fetchProductById(id);
  renderProduct(productItem);
  // Add event listener to 'Add To Cart' button
  const addToCartButton = document.getElementById('addToCart');
  addToCartButton.addEventListener('click', addToCart(productItem));
}

init();
