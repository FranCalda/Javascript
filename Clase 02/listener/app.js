const boton = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");

boton.addEventListener("click",agregarParrafo);
boton.addEventListener("click",cambiarColor);

boton2.addEventListener("click", quitarListener );

function agregarParrafo(){
    const parrafo = document.createElement("p");
    parrafo.textContent = "Hello";
    document.body.appendChild(parrafo)
}

function cambiarColor (){
    document.body.classList.toggle("tarde");
}

function quitarListener(){
    boton.removeEventListener("click", cambiarColor);
}