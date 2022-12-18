let button = document.querySelector("button");
let field = document.getElementById("username");

button.addEventListener("click", showUsername);

function showUsername (){
    let username = field.value;
    let h = document.createElement("h3");
    h.textContent = username;
    document.body.appendChild(h);

    document.getElementById("username").value;
    let user = document.getElementById("write").value;
    let newH4Element = document.createElement("h4");
    newH4Element.innerHTML = user;
    document.getElementById("textHere").appendChild(newH4Element);
    
    let today= new Date();
    
    let p = document.createElement("p")
    p.textContent = "";
    document.body.appendChild(p);
    document.getElementById("text").innerHTML= " Tänään on " + today.getDate()+"."+ 
    (today.getMonth()+1).toString().padStart(2,0) + "." + today.getFullYear()
    + " ja kello on " + today.getHours() + "."+ today.getMinutes().toString().padStart(2,0)+".";
    
    
    
}




