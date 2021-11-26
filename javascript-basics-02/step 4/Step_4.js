let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let city = document.querySelector("#city");
let button = document.querySelector("button");

button.addEventListener("click", reset)

function reset () {
    let answer = confirm("Sure you want to reset!!")

    if(answer === true){
        name.value = null;
        surname.value = null;
        city.value = null;
    }
};





    





