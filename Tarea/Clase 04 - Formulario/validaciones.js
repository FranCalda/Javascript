function validarNombre(cadenaNombre){
    return /^[\w\s]+$/i.test(cadenaNombre);
}

function validarEmail(cadenaEmail){
    return /^\w+@\w+(\.\w{2,3})+$/i.test(cadenaEmail);
}

function validarSelector(valorSeleccionado){
    return valorSeleccionado!=="ninguno";
}

function validarCheckbox(nodoCheckbox){
    return nodoCheckbox.checked;
}