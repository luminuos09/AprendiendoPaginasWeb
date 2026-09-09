const fecha1 = new Date(2026, 8, 0);

// Muestra la fecha en formato ISO pero en UTC (con la "Z" al final)
console.log(fecha1.toISOString());

// O bien en formato de cadena UTC legible:
console.log(fecha1.toUTCString());