function formValidate(){

    const nameInput = document.getElementById('nombre').value;
    const passInput = document.getElementById('password').value;


    if (nameInput == "" || passInput == "") {
        
        alert("Faltan campos por diligenciar");

    }else{
        alert("Formulario validado correctamente, todos los campos estan llenos");
    }
}