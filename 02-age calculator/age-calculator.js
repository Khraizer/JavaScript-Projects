function handleForm() {
    
    const birthdateInput = document.getElementById('birthdate').value;
    const fecha = new Date();

    const fechaNacimiento = new Date(birthdateInput);
    const fechaActual = new Date();

    if (birthdateInput == NaN || birthdateInput == undefined || birthdateInput == null || birthdateInput == '') {
        alert("¡Ingresa una fecha de nacimiento!")
    }else{
        if (fechaNacimiento > fechaActual) {
            alert("¡La fecha de nacimiento ingresada no puede ser mayor a la fecha actual!")
        }else{
            const milisegundos = fechaActual - fechaNacimiento;
            const dias = Math.floor(milisegundos / (1000 * 60 * 60 * 24));
            const meses = Math.floor(milisegundos / (1000 * 60 * 60 * 24 * 30));
            const years = Math.floor(milisegundos / (1000 * 60 * 60 * 24 * 30 * 12));
            
            document.getElementById('birthdate-calc').textContent = `Tienes ${years} años, ${meses} meses y ${dias} dias de vida`
            document.getElementById('birthdate-calc').style.display = 'inline-block';
        }
    }

}