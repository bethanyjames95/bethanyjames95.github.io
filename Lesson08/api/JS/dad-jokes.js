window.addEventListener("load", (event) =>{
    newJoke();
});

function newJoke(){
    const dad_id = document.getElementById("dad-joke");
    dad_id.innerHTML = "";
    dad_id.classList.remove("small")

    const joke = getDadJoke()

    // After the response comes back
    .then(function(j){
        dad_id.innerHTML = j["joke"];
        if(j["joke"].length > 85){
            dad_id.classList.add("small")
        }
    })
    .catch(function(e){
        dad_id.innerHTML = e;
    })
}

async function getDadJoke(){
    const url = "https://icanhazdadjoke.com/"
    let h = new Headers({
        "Accept"        : "application/json",
        "User-agent"    : "WDD-230-Test User Agent https://bethanyjames95.github.io"
    });
    // Tells us to wait and make sure they are okay
    const response = await fetch(url, {headers:h});
    
    // Make sure we have a good request back and return the json
    if(response.status == 200){
        return response.json();
    }
    else {
        throw new Error("No dad jokes found: " + response.status);
    }
}