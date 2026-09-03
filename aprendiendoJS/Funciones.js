function showMessage(){
    console.log("Mensaje")
    
}
showMessage()

//funciones de callback

//funciones flechas
  //pasar a funtiones flecha esta funcion ask
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);




