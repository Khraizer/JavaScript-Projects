function randomNumberGenerator(){

    const message = document.getElementById('number');

    let number = Math.floor(Math.random() * 1000) + 1;

    message.textContent = number;

}