function converter(value) {
    const celsiusElement = document.getElementById('celsius');
    const fahrenheitElement = document.getElementById('fahrenheit');
    const kelvinElement = document.getElementById('kelvin');

    let celsius, kelvin, fahrenheit;

    switch (value) {
        case 1:
            celsius = parseFloat(celsiusElement.value);
            kelvin = celsius + 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
        case 2: 
            fahrenheit = parseFloat(fahrenheitElement.value);
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 3: 
            kelvin = parseFloat(kelvinElement.value);
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
        default:
            return;
    }

    if (value !== 1) celsiusElement.value = celsius.toFixed(2);
    if (value !== 2) fahrenheitElement.value = fahrenheit.toFixed(2);
    if (value !== 3) kelvinElement.value = kelvin.toFixed(2);
}
