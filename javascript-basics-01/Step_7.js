
let shoe_size = document.getElementById("shoe_size")
let  birth_year = document.getElementById("year")
let validate = document.getElementById("validate")

  validate.addEventListener("click",function (){
    alert (
      `the result is 
      ${ (shoe_size.value * 2 + 5) * 50 -  birth_year.value +1766 }
      
      `
  )
  })
