/*
const btn1 = document.querySelector("button");

btn1.addEventListener("click", mostrarLenguaje);

const btn2 = document.querySelector("button");

btn2.addEventListener("click", mostrarLenguaje);

*/

const botones = document.querySelectorAll("button");
botones.forEach(btn =>{
    btn.addEventListener("click", mostrarLenguaje);
})

function mostrarLenguaje(e){
    console.log(e.target, this);

    //e.target es el elemento que origino el evento
    //this es el elemento que esta asociado al eventListener
    

    lenguaje = this.textContent;
    alert("Elegiste el lenguaje " + lenguaje)
}