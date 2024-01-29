const dataContainer = document.getElementById("data-container");

    fetch("https://api.noroff.dev/api/v1/rainy-days")

    //json to javasript object by method . json()
    .then(res => res.json())
    .then(data => {
        data.forEach(post =>{
            console.log(post);
            console.log(post.baseColor);
            console.log(post.description);
            console.log(post.discountedPrice);

            const descriptionElement = document.createElement("p");
            descriptionElement.innerText = post.description;
            dataContainer.appendChild (descriptionElement);
            
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image")

            const imageElement = document.createElement("img");
            imageElement.src = post.image ;
            // dataContainer.appendChild (imageElement);
            imageContainer.appendChild(imageElement);
            dataContainer.appendChild (imageContainer);
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



