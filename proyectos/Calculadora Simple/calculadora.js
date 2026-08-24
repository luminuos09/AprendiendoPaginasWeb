let txtOp1 = document.getElementById("op1")

let txtOperador = document.getElementById("operador")

let txtOp2 = document.getElementById("op2")

let btnCalcular = document.getElementById("calcular")

let pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)



function calcular() {

    const operador = txtOperador.value
    
    let op1 = parseFloat(txtOp1.value)
    let op2 = parseFloat(txtOp2.value)

    if (operador === "+" || operador === "-" || operador === "*" || operador === "/") {

        switch(operador){
            case "+":
                pResultado.innerText= op1+op2
                break;
            case "-":
                pResultado.innerText= op1-op2
                break;
            case "*":
                pResultado.innerText= op1*op2
                break;
            case "/":
                pResultado.innerText= op1/op2
                break;
            default:
                pResultado.innerText = "Calculo imposible"
                break;


        }

    } else {

        pResultado.innerText = "Calculo imposible"

    }
}