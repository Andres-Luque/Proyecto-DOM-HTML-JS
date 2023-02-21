
document.getElementById("btnTema1").addEventListener("click", fTemaUno);
document.getElementById("btnTema2").addEventListener("click", fTemaDos);
document.getElementById("btnTema3").addEventListener("click", fTemaTres);
document.getElementById("btnRestablecer").addEventListener("click", fRestablecer);

function fTemaUno() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "chocolate";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "aqua";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid chocolate";
    document.getElementsByClassName("cTitulo")[x].style.fontFamily = "Lilita One", "serif";
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "aqua";
    document.getElementsByClassName("cParrafo")[i].style.color = "chocolate";
    document.getElementsByClassName("cParrafo")[i].style.border = "1px solid chocolate";
    document.getElementsByClassName("cParrafo")[i].style.fontFamily = "IM Fell English SC", "serif";
  }
}

function fTemaDos() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "blue";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "grey";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid blue";
    document.getElementsByClassName("cTitulo")[x].style.fontFamily = "Lilita One", "serif";
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "grey";
    document.getElementsByClassName("cParrafo")[i].style.color = "blue";
    document.getElementsByClassName("cParrafo")[i].style.border = "1px solid blue";
    document.getElementsByClassName("cParrafo")[i].style.fontFamily = "IM Fell English SC", "serif";
  }
}

function fTemaTres() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "red";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "yellow";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid red";
    document.getElementsByClassName("cTitulo")[x].style.fontFamily = "Lilita One", "serif";
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "yellow";
    document.getElementsByClassName("cParrafo")[i].style.color = "red";
    document.getElementsByClassName("cParrafo")[i].style.border = "1px solid red";
    document.getElementsByClassName("cParrafo")[i].style.fontFamily = "IM Fell English SC", "serif";
  }
}

function fRestablecer() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "blueviolet";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "aqua";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid blueviolet";
    document.getElementsByClassName("cTitulo")[x].style.fontFamily = "Concert One", "serif";
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "aqua";
    document.getElementsByClassName("cParrafo")[i].style.color = "blueviolet";
    document.getElementsByClassName("cParrafo")[i].style.border = "1px solid blueviolet";
    document.getElementsByClassName("cParrafo")[i].style.fontFamily = "Gilda Display", "serif";
  }
}