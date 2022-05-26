const formulario = document.forms.registro;

formulario.addEventListener("submit", validar);

function validar (e){
    // let inputEmail = formulario.querySelector("input [name=correo]");

    let errores = [];

    //detectar errores


    if(errores.lenght){ // hay errores ?
        e.preventDefault(); //evita envio de datos
    }
     

}