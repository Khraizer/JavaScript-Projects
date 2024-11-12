function loanCalculate(){

    const tasaAnual = document.getElementById('interest').value;
    const monto = document.getElementById('amount').value;
    const meses = document.getElementById('months').value;

    let tasaMensual = tasaAnual / 100 / 12;

    let pagoMensual = (monto * tasaMensual * Math.pow(1 + tasaMensual, meses)) / 
                      (Math.pow(1 + tasaMensual, meses) - 1);

    document.getElementById('result-message').textContent =  pagoMensual.toFixed(2);

}