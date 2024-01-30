const dataContainer = document.getElementById("data-container");

    fetch("https://api.noroff.dev/api/v1/rainy-days")

    //json to javasript object by method . json()
    .then(res => res.json())
    .then(data => {
        data.forEach(post =>{

            console.log (data);

            const el = document.createElement('div');
            const imageElement = document.createElement("img");
            const priceElement = document.createElement('h2');

            //-----------ALSO HAVE innerText-----------
            priceElement.innerHTML = `${post.price}`;
            imageElement.src = post.image;

            el.appendChild(imageElement);
            el.appendChild(priceElement);
            dataContainer.appendChild (el);
        

        })

    })

    
    // handle the error
    .catch(error =>{
        console.log("error fetcing data:", error);
    }) 

    window.addEventListener("scroll", function(){
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 50)
    })
    
    var NavBar =  document.getElementById("NavBar")
    
    function showMenu(){
        NavBar.style.left = "-15px";
    }
    
    function hideMenu(){
        NavBar.style.left = "-300px";
    }



