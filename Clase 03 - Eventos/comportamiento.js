const caja = document.getElementById("caja");
const enlace = document.querySelector("a");

enlace.addEventListener("click", cambiarDiv);

function cambiarDiv(evento){
    evento.preventDefault(); //evita el redireccionamiento
    console.log(evento);
    caja.src = enlace.href;

}
//--------------------------------------------------------

/*function addEventListener(nombreDelEvento, nombreDeLaFuncionAEjecutar){
    if(se le hizo nombreDelEvento al elemento){
        nombreDeLaFuncionAEjecutar(); //callback
    }
}

function sumar(a,b){
    return 0;
}

sumar(100);
*/