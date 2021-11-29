let nb1= document.getElementById("first_number");
let nb2= document.getElementById("second_number");
let validate = document.getElementById("validate");


validate.addEventListener("click",function () {

    
    alert( 
        ` 
        the result of multiplication of 
        ${nb1.value} x ${nb2.value} = ${nb1.value*nb2.value}
        `
    )
    
});
