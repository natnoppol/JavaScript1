const query = () => {
  const qstr = window.location.search
  const url = new URLSearchParams(qstr)
  const id = url.get("id");

  return id
}


const getRainyday = async (id) => {
  const res = await fetch(`https://api.noroff.dev/api/v1/rainy-days/${id}`);

  // const response = res ();
  // console.log(res.json());
  return res.json();
}

// const getSingleShirt = async () => {
//   const id = (query());
//   const data = await getRainyday(id)
//   return data
// }


const el = async () => {
  const id = query();
  const item = await getRainyday(id);
  console.log(1, item)

  const cont = document.querySelector('#data-container')
  const render = `
  <div class="">
    <h1>${item.title}</h1>
    <img src="${item.image}"></img>
    <p>${item.price}</p>
  </div>

  `
  cont.innerHTML = render

}

el()