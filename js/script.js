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



