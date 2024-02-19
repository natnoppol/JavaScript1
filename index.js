//Get API by useing fetch and return res.json object
const getRainyDay = async () => {
  const res = await fetch("https://api.noroff.dev/api/v1/rainy-days");
  return res.json();
};
// function get data from function getRainyday and useing .map for loop innerHTML
const el = async (data) => {
  const contHome = document.querySelector("#data-container-cloth");
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
  contHome.innerHTML = productItem.join("");
};

// wait for HTML loaded and run function el() after
document.addEventListener('DOMContentLoaded', async function(){
  try{
    const response = await getRainyDay()
    el(response);
  }
    catch (error){
      alert('Something wrong ' + error.message);
    }

});

