//asi se crea un array
let frutas = new Array();
//metodos
    //push(agrega un elemento al final)
    frutas.push("maracuya");
    frutas.push("fresa");
    console.log(frutas)
    //pop(elimina el ultimo)
    frutas.pop()
    console.log(frutas)
    //shitf(Extrae el primer elemento del array y lo devuelve)
    frutas.push("banano")
    console.log(frutas.shift())
    console.log(frutas)
    //unshitf(Agrega el elemento al principio del array)
    frutas.unshift("Fresas")
    console.log(frutas)

//recorrer una lista
for(let fruta of frutas){
    console.log(fruta)
}
//saber la cantidad de elementos en una lista
console.log(frutas.length)

