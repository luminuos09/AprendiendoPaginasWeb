
let txtNota1 = document.getElementById("Nota1");
let txtNota2 = document.getElementById("Nota2");
let txtNota3 = document.getElementById("Nota3");
let btnCalcularNota = document.getElementById("CalcularNota");
let txtMostrar = document.getElementById("NotaMostrar");

btnCalcularNota.addEventListener('click', CalcularNota);

function CalcularNota() {
    let promedio = 0.0;
    //el metodo .trim es exclisvo de los string y elimina los espacios en el inicio y final de los string
    if (txtNota1.value.trim().length === 0 || 
        txtNota2.value.trim().length === 0 || 
        txtNota3.value.trim().length === 0) {
        
        txtMostrar.innerText = "Ingrese todas las notas";
    } else {
        const nota1 = parseFloat(txtNota1.value);
        const nota2 = parseFloat(txtNota2.value);
        const nota3 = parseFloat(txtNota3.value);
        
        promedio = (nota1 + nota2 + nota3) / 3;
        
        txtMostrar.innerText = promedio;
    }
}