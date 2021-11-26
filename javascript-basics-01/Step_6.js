let first_number= document.getElementById("first_number");
let second_number= document.getElementById("second_number");
let validate = document.getElementById("validate");

validate.addEventListener("click",function () {

    alert("the reminder of devision of "+first_number.value+" by "+second_number.value+" = "+first_number.value/second_number.value); 
    
});

