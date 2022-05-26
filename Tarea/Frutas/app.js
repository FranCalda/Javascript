const frutas = [
    { nombre: 'Manzana', icono: '🍎'},
    { nombre: 'Pera', icono: '🍐'},
    { nombre: 'Naranja', icono: '🍊'},
    { nombre: 'Banana', icono: '🍌'},
    { nombre: 'Sandia', icono: '🍉'},
    { nombre: 'Uva', icono: '🍇'},
    { nombre: 'Frutilla', icono: '🍓'},
    { nombre: 'Cereza', icono: '🍒'},
    { nombre: 'Anana', icono: '🍍'},
];

//2
let ul = document.getElementById("botones");
let fragmento = document.createDocumentFragment();
frutas.forEach(fruta => {
    let li = document.createElement("li");
    let boton = document.createElement("button");
    boton.textContent = fruta.icono + " " + fruta.nombre;
    boton.addEventListener("click", agregarFruta);
    li.appendChild(boton);
    fragmento.appendChild(li);
});
ul.appendChild(fragmento);

//3
document.getElementById("btnDestruir").addEventListener("click", quitarComportamientos);