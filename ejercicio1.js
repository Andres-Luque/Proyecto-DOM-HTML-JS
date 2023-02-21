
document.getElementById("btnTema1").addEventListener("click", fTemaUno);
document.getElementById("btnTema2").addEventListener("click", fTemaDos);
document.getElementById("btnTema3").addEventListener("click", fTemaTres);

function fTemaUno() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "chocolate";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "aqua";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid chocolate";
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "aqua";
    document.getElementsByClassName("cParrafo")[i].style.color = "chocolate";
    document.getElementsByClassName("cParrafo")[i].style.border = "1px solid chocolate";
  }
}

function fTemaDos() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "blue";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "grey";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid blue";
  }
  for (let i = 0; i < 9; i++) {
    document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "grey";
    document.getElementsByClassName("cParrafo")[i].style.color = "blue";
    document.getElementsByClassName("cParrafo")[i].style.border = "1px solid blue";
  }
}

function fTemaTres() {
  for (let x = 0; x < 3; x++) {
    document.getElementsByClassName("cTitulo")[x].style.color = "red";
    document.getElementsByClassName("cTitulo")[x].style.backgroundColor = "yellow";
    document.getElementsByClassName("cTitulo")[x].style.border = "1px solid red";
  }
  for (let i = 0; i < 9; i++) {
  document.getElementsByClassName("cParrafo")[i].style.backgroundColor = "yellow";
  document.getElementsByClassName("cParrafo")[i].style.color = "red";
  document.getElementsByClassName("cParrafo")[i].style.border = "1px solid red";
  }
}