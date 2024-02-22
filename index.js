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
//show select element on html 
function renderGenderSelect(response) {
  const filterData = document.getElementById("filter");
  const genderList = getUniqueGender(response);

  genderList.map((filter) => {
    const option = document.createElement("option");
    const node = document.createTextNode(filter);
    option.appendChild(node);
    option.value = filter;
    filterData.appendChild(option);
  });
}
//Get gender from object
function getUniqueGender(response) {
  //{destructuring object}
  const genderList = response.map(({ gender }) => gender);
  const uniqueGender = [...new Set(genderList)];
  return uniqueGender;
}

//save Value femele and male  by click
function handleChange(){
  const filterData = document.getElementById("filter");
  
  filterData.addEventListener('change', (event) => {
    const genderValue =  event.target.value; 
    genderChangeHandler(genderValue);

  }); 
}


//function on dropdown or selecting elements 
async function genderChangeHandler(genderValue){
  const products = await getRainyDay();
  let filtered = null; 
  if(genderValue ==='All')filtered = products
  if (genderValue !=='All') filtered = await getProductByGender(genderValue);
  

  el(filtered);

}

//filter products by user choose 
async function getProductByGender(genderValue){
  const products = await getRainyDay();
  const filteredProductByGender = products.filter((product) => product.gender === genderValue)

  return filteredProductByGender
}


// wait for HTML loaded and run function el() after
document.addEventListener("DOMContentLoaded", async function () {
  try {
    hideLoading();
    const response = await getRainyDay();
    el(response);
    renderGenderSelect(response);

    handleChange()

  } catch (error) {
    alert("Something wrong " + error.message);
  }
});
