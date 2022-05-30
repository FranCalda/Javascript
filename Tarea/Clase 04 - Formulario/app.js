const paises = [
    {value: "ar", text: "Argentina"},
    {value: "br", text: "Brasil"},
    {value: "cl", text: "Colombia"}
]

const formRegistro = document.forms.registro;
const inputNombre  = formRegistro.elements.nombre;
const inputEmail   = formRegistro.elements.email;
const selectPaises = formRegistro.elements.pais;
const chkTerminos  = formRegistro.elements.terminos;

const frag = document.createDocumentFragment();
paises.forEach(pais => frag.appendChild(crearOption(pais)));
selectPaises.appendChild(frag);

inputNombre.addEvenListener('blur', e =>blurControl(inputNombre,validarNombre));
inputEmail.addEvenListener('blur', e =>blurControl(inputEmail,validarEmail));
selectPaises.addEvenListener('blur', e =>blurControl(selectPaises,validarSelector));
chkTerminos.addEvenListener('blur', e =>blurCheck(chkTerminos));

formRegistro.addEvenListener("submit", e=>{
    blurControl(inputNombre,validarNombre);
    blurControl(inputEmail,validarEmail);
    blurControl(selectPaises,validarSelector);
    blurCheck(chkTerminos);

    if(
        inputNombre.classList.contains("con-error") ||
        inputEmail.classList.contains("con-error") ||
        selectPaises.classList.contains("con-error") ||
        chkTerminos.classList.contains("con-error") 
    ){
        e.preventDefault();
    }
});

//----------------------------------------------

function crearOption(obj){
    const opcion = document.createElement("option");
    opcion.value = obj.value;
    opcion.textContent = obj.text;
    return opcion;
}

function blurControl(nodo,validacion){
    if(validacion(nodo.value)){
        nodo.nextElementSibling.classList.add("oculto");// oculto el span
        nodo.classList.remove("con-error");
    }
    else{
        nodo.nextElementSibling.classList.remove("oculto");
        nodo.classList.add("con-error");
    }
}I

function blurCheck(nodo){
    if(validarCheckbox(nodo)){
        nodo.nextElementSibling.nextElementSibling.classList.add("oculto");
        nodo.classList.remove("con-error");
    }
    else{
        nodo.nextElementSibling.nextElementSibling.classList.remove("oculto");
        nodo.classList.add("con-error");
    }
}