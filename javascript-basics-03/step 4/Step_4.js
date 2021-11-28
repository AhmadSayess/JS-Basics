let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirmation");
let button = document.querySelector("button");


button.addEventListener('click', function (){ 
    if(password.value!=confirmation.value){

     password.style.border="1px solid red";

     confirmation.style.border="1px solid red";
    }

    else{ password.style.border= "";
        confirmation.style.border="";
    }
    
    });





