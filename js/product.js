"use strict"

// Create a URLSearchParams object based on the URL query string
const urlParams = new URLSearchParams(location.search);
// Get the id parameter from the URL query string
const productId = urlParams.get('id');

//Get references to product image, product information, name, description, price and page title elements in the DOM
const productDetail = document.querySelector('.product-detail');
const productImg = productDetail.querySelector('img');
const productInfo = productDetail.querySelector('.product-info');
const productName = productInfo.querySelector('h1');
const productDesc = productInfo.querySelector('p');
const productPrice = productInfo.querySelector('h2');
const pageTitle = document.querySelector('title'); // Hämta <title> elementet

//Define a function to retrieve product information from the API server,
//update the page and page title with the product information
function getProductDetails() {
  fetch(`/api/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      // Update product image, name, description and price
      productImg.src = product.imageUrl;
      productImg.alt = product.name;
      productName.textContent = product.name;
      productDesc.textContent = product.description;
      productPrice.textContent = `${product.price} SEK`;
      // Update the page name
      document.title = product.name;
    })
    .catch(error => console.error('Error fetching product details:', error));
}
//Call the getProductDetails function to retrieve product details and refresh the page.
getProductDetails();
