function handleCalculate(){

    const height = document.getElementById('height').value;

    const weight = document.getElementById('weight').value;

    const bmiSpan = document.getElementById('bmi-result');

    let heightCalc = height / 100;

    heightCalc = heightCalc * heightCalc;

    let bmi = weight / heightCalc;

    let message;

    if (bmi < 18.5) {
        message = "you have Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        message = "you have Normal Weight";
    }else if(bmi >= 25 && bmi <= 29.9){
        message = "you have Overweight";
    }else if(bmi >= 30){
        message = "you have Obesity";
    }

    bmiSpan.textContent =  `Your BMI is: ${bmi.toFixed(3)}, ${message}`;

}