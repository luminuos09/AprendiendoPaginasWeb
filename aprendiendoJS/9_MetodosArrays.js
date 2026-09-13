let  compu = new Array();
compu.push("voy")
compu.push("a")
compu.push("casa")
//delete en estos casos no sirve pq solo elimina la variable pero no el dato en la memoria
//entonces para esos casos es mejor el splice
compu.splice(1,1)//desde el indice 1, remover 1 elemento

console.log(compu)
//Buscar dentro de una array
if(compu.includes('voy')){
    console.log("Existe")
}else{
    console.log("No existe")
}

//buscar objetos dentro de un array
let users = [
  {id: 1, name: "Celina"},
  {id: 2, name: "David"},
  {id: 3, name: "Federico"}
];

let user = users.find(item => item.id == 1);

console.log(user.name); // Celina


//ordenar una array
let numeros = [3, 1, 10, 2];

numeros.sort();                        //  ¡Mal! Ordena como texto
console.log(numeros); // [1, 10, 2, 3]

numeros.sort((a, b) => a - b);         //  Ordena bien
console.log(numeros); // [1, 2, 3, 10]

//buscar dentro de una array
let frutas = ["manzana", "banano", "uva"];

frutas.forEach(function(fruta, indice) {
  console.log(indice + ": " + fruta);
});

//reduce ayuda a acumular todos los elementos de una array  
let precios = [100, 200, 300];

let total = precios.reduce(function(acumulador, precio) {
  return acumulador + precio;
}, 0);  // <- el 0 es el valor inicial

console.log(total); // 600

