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
    data.forEach(post => {

        console.log(data);

        const el = document.createElement('div');
        const productLink = document.createElement('a');
        const imageElement = document.createElement("img");
        const priceElement = document.createElement('h2');
        
        //-----------ALSO HAVE innerText-----------
        priceElement.innerHTML = `${post.price}`;
        imageElement.src = post.image;


        productLink.href = `/product/index.html?id=${post.id}`;
        productLink.classList.add("product_link");

        el.appendChild(imageElement);
        el.appendChild(priceElement);
        el.appendChild(productLink);
        productLink.appendChild(imageElement);
        productLink.appendChild(priceElement);
        dataContainer.appendChild(el);

    })
}



el()






