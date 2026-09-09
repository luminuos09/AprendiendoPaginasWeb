let user = new Object();
//esta es una manera de declarar las propiedades de un objeto
user["name"]= "sebastian ramos"
user.age=19
user.carrer="Ingenieria en sistemas"
//asi es una forma de leerlo de manera individual
console.log(user.name)
//asi lo podemos eliminar una propiedad
delete user.age

//asi es otra manera de leerlos con un for in

for(let code in user){
    console.log(code)
}

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...otras propiedades
  };
}

let user2 = makeUser("John", 30);
console.log(user2.name); // John