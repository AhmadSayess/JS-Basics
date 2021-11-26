 let name     = document.getElementById("name")
 let surname  = document.getElementById("surname")
 let city     = document.getElementById("city")
 let validate = document.getElementById("validate")

 validate.addEventListener("click",function(){
     
    alert(`
        Nom: ${name.value}
        prenom:${surname.value}
        Ville :${city.value}
        `);
 
 });


 


