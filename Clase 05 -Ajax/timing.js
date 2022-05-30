console.log("Hello");
document.body.innerHTML = "<h1>Hello</h1>";
setTimeout(cambiarTitulo, 2000);
console.log("The End");

function cambiarTitulo(){
    console.log("Cambiando titulo");
    document.body.innerHTML = "<h1>Good Bye</h1>";
    console.log("Titulo cambiado");    
}