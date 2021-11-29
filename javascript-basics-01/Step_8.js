let age =document.getElementById("age");
let validate = document.getElementById("validate")
validate.addEventListener("click",function (){

    if(age >= 18) alert("you are over 18")

else alert("you are under 18");

}
)