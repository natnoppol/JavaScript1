// import global from '/js/scritp.js';
// import products from './js/product';

// let app = document.getElementById('app');
// let temporaryContent = document.getElementById('temporaryContent');

// const loadTemplate = () => {
//   fetch('/template.html')
//     .then((response) => response.text())
//     .then((html) => {
//       app.innerHTML = html;
//       let contentTab = document.getElementById('contentTab');
//       contentTab.innerHTML = temporaryContent.innerHTML;
//       temporaryContent.innerHTML = null;
//       cart();
//       initApp();
//     });
// };

// loadTemplate();
// const initApp = () => {
//   let listProduct = document.querySelector('.listProduct');
//   listProduct.innerHTML = null;
//   products.foreach((product) => {
//     let newProduct = document.createElement('div');
//     newProduct.classList.add('item');
//     newProduct.innerHTML = `
//         <img src="${product.image}"/>
//         <h2>${product.name}</h2>
//         <div class="price">${product.price}</div>>
//         `;
//     listProduct.appendChild(newProduct);
//   });
// };

const getRainyday = async () => {
  const res = await fetch('https://api.noroff.dev/api/v1/rainy-days');

  return res.json();
};

const el = async () => {
  const data = await getRainyday();
  const contHome = document.querySelector('#data-container-cloth');
  const productItem = data.map(
    (post) => `
    <a href="/product/index.html?id=${post.id}">
      <div class="product-wrapper">
        <div class="product-item">
            <img src="${post.image}"></img>
        </div>
        <div class="product-des"> 
            <p class="product-title">${post.title}</p>
            <p class="product-price">${post.price} NOK.</p>
        </div>
      </div>
    </a>
    `
  );
  contHome.innerHTML = productItem.join('');
};

document.addEventListener('DOMContentLoaded', () => {
  el();
});
