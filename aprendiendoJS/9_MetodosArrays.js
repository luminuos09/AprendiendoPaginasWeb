let  compu = new Array();
compu.push("voy")
compu.push("a")
compu.push("casa")
//delete en estos casos no sirve pq solo elimina la variable pero no el dato en la memoria
//entonces para esos casos es mejor el slice
compu.splice(1,1)//desde el indice 1, remover 1 elemento

console.log(compu)