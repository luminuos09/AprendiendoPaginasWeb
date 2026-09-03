function showMessage(){
    console.log("Mensaje")
    
}
showMessage()

//expresiones de funciones

let message = showMessage

message

//funciones de callback

function saludar(nombre) {
  console.log("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
  let nombre = "Ana";
  callback(nombre); // Se ejecuta la función pasada como argumento
}

procesarEntradaUsuario(saludar); // Resultado en consola: Hola Ana
//yo la verdad lo veo como innecesario



//funciones flechas

let salu = () => console.log("hola");
salu();

//otro ejemplo mas complicado para entender mas idioma
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('¡Hola!') :
  () => alert("¡Saludos!");

welcome();

//pregunta la edad, si es mayor de 18 muestra saludos sino muestra hola



  //pasar a funtiones flecha esta funcion ask
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); */

let ask = (question, yes, no) => {
(confirm(question)) ? yes() : no()
}

ask(
"Do you agree?",
() => alert("You agreed."),
() => alert("You canceled the execution.")
);




