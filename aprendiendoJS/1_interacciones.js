//alert
alert("hello")
//prompt
let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //le pregunta al usuario mediante un alerta cuantos años tienes

//confirm
let isBoss = confirm("¿Eres el jefe?");

if(isBoss){
    alert( "es jefe")
}else{
    alert("no es jefe")
}//hace la pregunta de si o no de si es jefe y suelta un mensaje dependiendo la respuesta


