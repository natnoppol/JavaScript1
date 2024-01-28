const dataContainer = document.getElementById("data-container");


    fetch("https://api.noroff.dev/api/v1/rainy-days")

    //json to javasript object by method . json()
    .then(res => res.json())
    .then(data => {
        data.forEach(post =>{
            console.log(post);
            const postElement = document.createElement("p");
            postElement.textContent = `
            Post ID: ${post.id} - Title: ${post.title}, Body: ${post.body}`;
            dataContainer.appendChild(postElement);
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



