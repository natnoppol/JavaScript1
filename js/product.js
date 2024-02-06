const query = () => {
  const qstr = window.location.search
  const url = new URLSearchParams(qstr)
  const id = url.get("id");

  return id
}


const getRainyday = async (id) => {
  const res = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${id}`);
  return res.json();
}

const allData = async () => {
  const res = await fetch(`https://api.noroff.dev/api/v1/rainy-days/`);
  return res.json();
}



const el = async () => {
  const id = query();
  const item = await getRainyday(id);


  const cont = document.querySelector('#data-container')
  const render = `
  <div class="product-img">
    <img src="${item.image}"></img>
  </div>
  <div class="product-detail"> 
    <h1>${item.title}</h1>
    <h3>${item.price} NOK.</h3>
    <select id="mySelect">
      <option>Select Size</option>
      ${item.sizes.map(size => `<option>${size}</option>`)}
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
  </div>
  
  `
  cont.innerHTML = render

}
//1. กดปุ่ม add to cart  => alert(คลิ๊ก) 
//2. function add to cart => มัน call => log 
//3. เอา ID ค่าเดียว ใส่ array 
//4. เอา สินค้าทั้งหมด ใส่ array 

let products = []
const itemInCart = [
  {
    "id": "07a7655a-7927-421b-ba6a-b6742d5a75b8",
    "title": "Rainy Days Thunderbolt Jacket",
    "description": "The Women's Rainy Days Thunderbolt jacket is a sleek and stylish waterproof jacket perfect for any outdoor adventure.",
    "gender": "Female",
    "sizes": [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "XXL"
    ],
    "baseColor": "Black",
    "price": 139.99,
    "discountedPrice": 139.99,
    "onSale": false,
    "image": "https://static.noroff.dev/api/rainy-days/9-thunderbolt-jacket.jpg",
    "tags": [
        "jacket",
        "womens"
    ],
    "favorite": false
},
{
  "id": "6e5ae9e6-2033-4c63-82b9-5b58226425f4",
  "title": "Rainy Days VitaForce Jacket",
  "description": "The Women's Rainy Days VitaForce jacket is a breathable and sustainable waterproof jacket for hiking.",
  "gender": "Female",
  "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
  ],
  "baseColor": "Green",
  "price": 124.99,
  "discountedPrice": 124.99,
  "onSale": false,
  "image": "https://static.noroff.dev/api/rainy-days/6-vitaforce-jacket.jpg",
  "tags": [
      "jacket",
      "womens"
  ],
  "favorite": false
}

]
async function addToCart() {
  let iconCart = document.querySelector('#addToCart');
  let id = query()

  const item = await getRainyday(id);
  let selectElement = document.getElementById('mySelect');
  let colorElement = document.getElementById('mySelectColor');
  let numberElement = document.getElementById('mySelectNumber');


  iconCart.addEventListener('click', async () => {
    let selectValue = selectElement.value;
    let selectColor = colorElement.value;
    let selectNumber = numberElement.value;

    let emptyObject = {
      'price': item.price,
      'tittle': item.title,
      'size': selectValue,
      'color': selectColor,
      'number': selectNumber,
      'id': id
    };
    products = itemInCart

    if (id === emptyObject.id) {
      parseInt(emptyObject.number) + parseInt(selectNumber)
    } else {
      products.push(emptyObject)
    }

    
    console.log(1, products)
    console.log(2, emptyObject)
    console.log(3, parseInt(emptyObject.number) + parseInt(selectNumber))
    console.log(4, typeof emptyObject.number)
    console.log(5, typeof selectNumber)
    console.log(6, await allData())
    console.log(7, (id === emptyObject.id))
    


  })
}


const init = async () => {
  await el()
  await addToCart()
}



init()