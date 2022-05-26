function agregarFruta(evento){
    let fruta = evento.target.textContent; // esto es el contenido del button pulsado
    let div = document.createElement("div");
    div.classList.add("fruta");
    div.textContent = fruta; 
    document.getElementById("cuadricula").appendChild(div);

    
}

function quitarComportamientos(){
    alert("Has quitado todo el comportamiento");
    let botones = document.querySelectorAll("ul button");
    botones.forEach(boton =>{
        boton.removeEventListener("click", agregarFruta);
    });
}
