const formulario = document.forms.registro;

formulario.addEventListener("submit", validar);


function validar(e){
    //let inputEmail = formulario.querySelector("input[name=correo]");
    let inputEmail = formulario.elements.correo;
    let inputClave = formulario.elements.clave;
    // let EREmail = new RegExp("/[a-z0-9\._]+@[a-z]+\.[a-z]{2,4}/i");
    let EREmail = /[a-z0-9\._]+@[a-z]+\.[a-z]{2,4}/i;
    let errores = [];

    //detectar errores
    if(!EREmail.test(inputEmail.value)){
        errores.push("Formato de email incorrecto");
    }

    if(inputClave.value==""){
        errores.push("Clave invalida");
    }

    if(errores.length){ //Hay errores
        e.preventDefault(); //Evita el envio de datos
        document.getElementById("errores").innerHTML= "";
        errores.forEach(err => {
            let li = document.createElement("li");
            li.textContent = err;
            document.getElementById("errores").appendChild(li);
        });
    }
}