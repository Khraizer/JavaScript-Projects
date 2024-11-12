function handleCalculate(){

    const message = document.getElementById('tip-message')

    let bill = document.getElementById('bill').value;
    let percentage = document.getElementById('percentage').value;

    const result = bill * (percentage / 100);

    message.textContent = `$${result}`;


}