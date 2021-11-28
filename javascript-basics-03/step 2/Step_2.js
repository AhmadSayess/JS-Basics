let show = document.querySelector("#show");
let hide = document.querySelector("#hide");
let text = document.querySelector("#texte");

function button(id) {
  if (id == "show") {
    texte.style.display = "block";
  } else if (id == "hide") {
    texte.style.display = "none";
  }
};
