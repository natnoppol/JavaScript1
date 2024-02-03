import cart from "./js/script";
import products from "./js/product";


let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/template.html')
        .then(response => response.text())
        .then(html => {
            app.innerHTML = html;
            let contentTab = document.getElementById('contentTab');
            contentTab.innerHTML = temporaryContent.innerHTML;
            temporaryContent.innerHTML = null;
            cart()
            initApp();
        })
}

loadTemplate();
const initApp = () => {
    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null
    products.foreach (product=>{
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `
        <img src="${product.image}"/>
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>>
        `;
        listProduct.appendChild(newProduct)
    })
}