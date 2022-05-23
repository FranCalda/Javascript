//Capturar------------------------------------------
const refDiv = document.getElementById("caja");// objeto HTMLElement
const refPpal = document.getElementById("principal"); // null
//getElementsByClassName, getElementsByTagName, getElementsByName
/*
Los metodos getElements, siempre devuelven un array(vivo) de obj HTMLElement
*/

const refParrafos = document.getElementsByTagName("p"); // [p,p,p,p ]
const todosLosH1 = document.getElementsByTagName("h1"); // [h1]
const todosLosEnlaces = document.getElementsByTagName("a"); // []

const h1 = document.querySelector("h1")
const div = document.querySelector("#caja")
const enlaces = document.querySelector("a") //null
const parrafosDirectos = document.querySelectorAll("#caja > p"); //Devuelve todos los elementos p [p,p,p] array normal

//Manipular contenido -------------------------------
//refDiv.innerHTML = "Curso de <b>JS</b>";
// refDiv.innerText = "Curso de <b>JS</b>" No interpreta html
//refDiv.textContent = "Curso de JS"; //Uso oficial, salvo que quiera utilizar etiquetas dentro del texto

//estilos inline
refDiv.style.border = "3px solid red";

//Clases css
//refDiv.className = "redondeado especial"
refDiv.classList.add("redondeado");
refDiv.classList.add("espaciado");
refDiv.classList.remove("espaciado");
refDiv.classList.toggle("espaciado");//Si la tiene, se la quita, si no la tiene, se le agrega

//Eventos

refDiv.onclick = function (){
    alert("hola");
}

for(let i=0; i< refParrafos.length; i++){
    refParrafos[i].style.color="orange";
}

for(let i=0; i< parrafosDirectos.length; i++){
    parrafosDirectos[i].style.fontSize = "30px";
}