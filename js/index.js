"use strict"

// Create an empty array for products
let products = [];

// Make a GET request to /api/products
fetch("/api/products")
    .then(resp => resp.json())
    .then(data => {
        // Assign "data" to "products"
        products = data;
        // Call the "renderProducts" function with "products" as an argument
        renderProducts(products);
    })
    .catch(error => {
        // If an error occurs, log the error to the console
        console.log("Error fetching products:", error);
    });

// A function that renders product cards for each product in the "products" array
function renderProducts(products) {
    // Select the element with the class name "popular-products" and select its first child element
    const popularProductsSection = document.querySelector(".popular-products .parent");
    // Create an array of HTML code for each product card
    const productCards = products.map(product => `
        <article class="items-card"> 
            <a href="product-details.html?id=${product.id}">
                <img src="${product.imageUrl}" alt="${product.name}">
            </a>
            <div class="items-info">
                <span class="items-name">${product.name}</span>
                <span class="items-price">${product.price} SEK</span>
            </div>
        </article>
    `);
    // Paste all product cards as HTML code in "popularProductsSection"
    popularProductsSection.innerHTML = productCards.join("");
}
