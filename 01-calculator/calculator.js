function botones(valor){

    

    const resultado = document.getElementById('resultado');

    const info = document.getElementById('info');

    info.value += valor;

    resultado.textContent += valor.replaceAll("|","")
    

}

function calcular(){



    const info = document.getElementById('info').value;

    const partes = info.split("|");
    const operadores = ["/","x","+","-"];

    let result = parseFloat(partes[0]);
    
    for (let i = 1; i < partes.length; i++) {
        const operador = partes[i];
        
        if (operador === "x" || operador === "/") {
            const num = parseFloat(partes[i + 1]);
            if (operador === "x") {
                result *= num;
            } else if (operador === "/") {
                if (num !== 0) {
                    result /= num;
                } else {
                    console.log("Error: División por cero");
                }
            }
            i++;
        }
    }
    
    for (let i = 1; i < partes.length; i++) {
        const operador = partes[i];
        
        if (operador === "+" || operador === "-") {
            const num = parseFloat(partes[i + 1]);
            if (operador === "+") {
                result += num;
            } else if (operador === "-") {
                result -= num;
            }
            i++;
        }
    }

    console.log(partes);
    document.getElementById('resultado').textContent = result;
       const cantOp = partes.reduce((acc, el) => (operadores.includes(el) && (acc[el] = (acc[el] || 0) + 1), acc), {})
    console.log(cantOp)


    console.log(partes)    
      
    
}

function clearOutput(){

    const resultado = document.getElementById('resultado');

    resultado.textContent = "";
}