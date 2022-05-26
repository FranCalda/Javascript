/*
const btn1 = document.querySelector("button");

btn1.addEventListener("click", mostrarLenguaje);

const btn2 = document.querySelector("button");

btn2.addEventListener("click", mostrarLenguaje);

const btn3 = document.querySelector("button");

btn3.addEventListener("click", mostrarLenguaje);

const btn4 = document.querySelector("button");
 
btn4.addEventListener("click", mostrarLenguaje);

*/

/* const botones = document.querySelectorAll("button");
botones.forEach( aux=>{
    aux.addEventListener("click", mostrarLenguaje);
}) */

const botonera = document.getElementById("botonera");
botonera.addEventListener("click", mostrarLenguaje);


function mostrarLenguaje(e){
    console.log(e.target, this);

    if(e.target.tagName=="DIV"){
        return; //sale de la funcion, no hace falta aclarar que devuelve, devuelve undefined
    }

    //e.target es el elemento que origino el evento
    //this es el elemento que esta asociado al eventListener
    

    lenguaje = e.target.textContent;
    alert("Elegiste el lenguaje " + lenguaje)
}