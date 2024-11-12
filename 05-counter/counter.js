function handleAdd(){

    const counter = document.getElementById('counter');

    let count = document.getElementById('count').value;

    count++;

    document.getElementById('count').value = count;

    counter.textContent = count;

}

function handleMinus(){

    const counter = document.getElementById('counter');

    let count = document.getElementById('count').value;

    if (count > 0) {
        count--;
    
        document.getElementById('count').value = count;
    
        counter.textContent = count;
    }


}

function handleReset() {
    
    const counter = document.getElementById('counter');

    let count = document.getElementById('count').value;

    count = 0;

    document.getElementById('count').value = count;

    counter.textContent = count;

}