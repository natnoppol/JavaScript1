const getRainyday = async () => {
  const res = await fetch('https://api.noroff.dev/api/v1/rainy-days');

  return res.json();
};

const el = async () => {
  const data = await getRainyday();
  const contHome = document.querySelector('#data-container-cloth');
  const productItem = data.map(
    (post) =>
      `
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

document.addEventListener('DOMContentLoaded', async function () {
  await el();
});
