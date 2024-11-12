function handleLenght(){

    const text = document.getElementById('text').value;
    const maxLenght = document.getElementById('max').value;
    document.getElementById('text').setAttribute("maxlength", maxLenght);

    let length = text.length;
    let remaining = maxLenght - length;

    document.getElementById('character-count').textContent = length;

    document.getElementById('remaining-count').textContent = remaining;

}