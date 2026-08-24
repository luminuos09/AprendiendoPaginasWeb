const formulario = document.querySelector("#formulario-gasto");

const inputNombre = document.querySelector("#nombre");

const inputPrecio = document.querySelector("#precio");

const inputCategoria = document.querySelector("#categoria");

const listaGastos = document.querySelector("#lista-gastos");

const mensaje = document.querySelector("#mensaje");


formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombre = inputNombre.value;

    const precio = Number(inputPrecio.value);

    const categoria = inputCategoria.value;


    if (nombre === "") {

        mensaje.textContent = "Debes escribir el nombre del gasto";

        return;
    }


    if (precio <= 0) {

        mensaje.textContent = "El precio debe ser mayor que cero";

        return;
    }


    const gasto = document.createElement("article");

    gasto.classList.add("gasto");


    gasto.textContent =
        `${nombre} - ${categoria} - $${precio}`;


    listaGastos.append(gasto);


    mensaje.textContent = "Gasto agregado correctamente";


    formulario.reset();

});