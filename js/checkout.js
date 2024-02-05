"use strict"

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
  
  
  
  const el = async () => {
    const id = query();
    const item = await getRainyday(id);
    console.log(1, item)
  
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
      <select>
        <option>Color</option>
        <option>${item.baseColor}</option>
      </select>
      <input type="number" value="1">
      <button class="normal">Add To Cart</button>
      <h4>Product Detail</h4>
      <span>${item.description}</span>
      <br>
    </div>
    
    `
    cont.innerHTML = render
    
  }
  
  
  el()