
//asi podemos cambiar el texto de una pagina usando queryselector
const titulo = document.querySelector("#Titulo");

//el textContent representa el elemento que contiene un texto
titulo.textContent = "Gestor de Gastos";

const Mensaje = document.getElementById("mensaje");

Mensaje.style.color="red";

//crear elementos html mediante javascript
const nuevoParrafo = document.createElement("p");

nuevoParrafo.textContent="Este contenido del texto"

document.body.append(nuevoParrafo)
//si lo quiero agregar dentro de otro elemento seria mas o menos como
const contenedorCorre = document.querySelector("#corre");

const nuevocontenido = document.createElement("p");
nuevocontenido.textContent="Un nuevo contenido en una parte especifica";

contenedorCorre.append(nuevocontenido);
//esto es para añadir un evento que cuando presione el subir este mande a la consola un mensjae y se mantenga en la pagina

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    //mediante esta funcion se mantiene en la pagina
    event.preventDefault();

    console.log("Formulario enviado");
});





