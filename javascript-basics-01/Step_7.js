let shoesize =window.prompt("give me shoe zize");
let birthyear =window.prompt("give me birth year");

function Name(shoesize,birthyear)  {
    return (shoesize * 2 + 5) * 50 - birthyear +1766;
  };

  alert("the result is " +Name(shoesize,birthyear) );
  
  