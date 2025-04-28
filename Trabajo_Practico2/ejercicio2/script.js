var campoTexto = document.getElementById("texto");
var botonAgregar = document.getElementById("agregar");
var lista = document.getElementById("lista");

function agregar_elemento() {
  botonAgregar.addEventListener("click", agregar_texto);
}

function agregar_texto() {
  textoIngresado = campoTexto.value.trim();

  if (textoIngresado != "") {
    let nuevoItem = document.createElement("li");
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "eliminar";

    nuevoItem.textContent = textoIngresado;
    nuevoItem.appendChild(botonEliminar);

    botonEliminar.addEventListener("click", function () {
      lista.removeChild(nuevoItem);
    });

    lista.appendChild(nuevoItem);

    alert("Texto agregado correctamente");
    campoTexto.value = "";
  } else {
    alert("Por favor ingrese algo");
  }
}

agregar_elemento();
