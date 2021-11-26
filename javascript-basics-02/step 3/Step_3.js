 let name = document.getElementById("form");

 name.addEventListener("submit", SV);
 function SV (e) {
    let div = document.getElementById("name").value; 
    document.getElementById("div").innerHTML = div;
    e.preventDefault();    
 }