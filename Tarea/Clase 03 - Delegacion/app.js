const nav = document.querySelector("nav");
const marco = document.querySelector("iframe");
const formu = document.forms[0]; // puedo usar referencias a forms sin buscarlos con selectores

nav.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();
  if(e.target.tagName == "A"){
    marco.src = e.target.href;
  }
});

formu.addEventListener("submit", e => {
  e.preventDefault();
  const controles = e.target.elements; // form tiene la propiedad elements que trae todos sus controles en una coleccion (simil array)

  const texto = controles.emoji.value + " " + controles.nombre.value;
  const nodoLink = document.createElement("a");
  nodoLink.href = controles.enlace.value;
  nodoLink.textContent = texto;

  nav.appendChild(nodoLink);

});