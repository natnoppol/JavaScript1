const dataContainer = document.getElementById("data-container-cloth");
const searchApi = ``;

window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
})

var navBar = document.getElementById("navBar")

function showMenu() {
    navBar.style.left = "-15px";
}

function hideMenu() {
    navBar.style.left = "-300px";
}





const cart = () => {
    let iconCart = document.querySelector('.icon-cart');
    let closeBtn = document.querySelector('cartTab .close');
    let body = document.querySelector('body');

    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart')
    })
    closeBtn.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })
}
export default cart;



const getRainyday = async () => {
    const res = await fetch("https://api.noroff.dev/api/v1/rainy-days");
    return res.json();
}

const el = async () => {
    const data = await getRainyday()
    const contHome = document.querySelector('#data-container-cloth')
    const productItem = data.map(post => 

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

    )
    contHome.innerHTML = productItem.join('')
}



el()


// const el = document.createElement('div');
// const productLink = document.createElement('a');
// const imageElement = document.createElement("img");
// const priceElement = document.createElement('h2');
// const productName = document.createElement ('h2')
// //-----------ALSO HAVE innerText-----------
// priceElement.innerHTML = `${post.price} NOK.`;
// imageElement.src = post.image;
// productName.innerHTML = `${post.title}`;


// productLink.href = `/product/index.html?id=${post.id}`;
// productLink.classList.add("product_link");

// el.appendChild(imageElement);
// el.appendChild(priceElement);
// el.appendChild(productName);
// el.appendChild(productLink);
// productLink.appendChild(imageElement);
// productLink.appendChild(priceElement);
// dataContainer.appendChild(el);