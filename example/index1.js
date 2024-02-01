const { rejects } = require("assert");
const { resolve } = require("path");

const myPromise = new Promise ((resolve, rejects) => {
setTimeout(() => {
  resolve("done");
}, 1000);
});

myPromise.then(
result => alert(result),
error => alert(error)
)

const loadData= async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch (url);
    if (res.ok) {
    const data = await res.json();
    return data;
    } else {
      console.log (res.stastus);
    }
    
  } catch(err){
    console.log(err);
  }
}

(async () => {
  const data = await loadData ();
})