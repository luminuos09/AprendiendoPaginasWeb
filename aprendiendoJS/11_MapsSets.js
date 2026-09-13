
let edades = new Map();

edades.set("Ana", 25);
edades.set("Luis", 30);
edades.set("Ana", 26);  

console.log(edades);

    //recorrer un map
    for (let [nombre, edad] of edades) {
        console.log(`${nombre} tiene ${edad} años`);
    }
    //guardar objetos en un arrya
    let personas = new Map();

    personas.set("Ana", { edad: 29, carrera: "Ing Sistemas" });
    personas.set("Luis", { edad: 32, carrera: "Medicina" });

    console.log(personas.get("Ana"));
    // { edad: 29, carrera: "Ing Sistemas" }

    // Acceder a cada dato:
    console.log(personas.get("Ana").edad);     // 29
    console.log(personas.get("Ana").carrera);  // "Ing Sistemas"





//set coleccion sin repetir
let numeros = new Set([1, 2, 2, 3, 3, 3]);
   //recorrerlo
    for (let n of numeros) {
    console.log(n);
    }
    //metodos importantes
    let set = new Set();

    set.add(1);        // agregar
    set.add(2);
    set.add(2);        // ignorado (ya existe)

    console.log(set.has(1)); // true (¿existe?)
    console.log(set.size);   // 2 (tamaño)

    set.delete(1);     // eliminar

    console.log(set); // Set(1) { 2 }
