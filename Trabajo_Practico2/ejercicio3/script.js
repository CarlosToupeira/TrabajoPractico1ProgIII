// -- VARIABLES
var botonResaltar = document.getElementById("resaltar");
var botonOcultar = document.getElementById("ocultar");
var parrafos = document.querySelectorAll(".parrafos");


// -- EVENTOS

botonResaltar.addEventListener("click", function () {
  parrafos.forEach(function (p) {
    p.classList.add("resaltado");
  });
});

botonOcultar.addEventListener("click", function () {
  parrafos.forEach(function (p) {
    p.classList.toggle("oculto");
  });
});
