//tarea cambair el nombre a la copia pero sin que le cambie al original
const user = {
  name: " maria",
  age: 23,
  isActive: true,
};

const admin = user;

console.log(`${user.name} - ${admin.name}`);

admin.name = "Pedro";

console.log(`${user.name} - ${admin.name}`);
