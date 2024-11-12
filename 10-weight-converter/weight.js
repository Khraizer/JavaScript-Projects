function handleCalculate(){

    const pounds = document.getElementById('pounds').value;
    const message = document.getElementById('message');


    const weight = pounds / 2.20462;

    message.textContent = weight.toFixed(3);

    console.log(weight)

}