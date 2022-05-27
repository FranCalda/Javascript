/*Primer solucion

const refButton = document.getElementById("btnAccion");

refButton.addEventListener ("click", function(){
    if(document.body.classList.contains("oscuro")){
        document.body.classList.remove("oscuro");
        refButton.textContent = "Apagar la luz";
    }else{
        document.body.classList.add("oscuro");
        refButton.textContent = "Encender la luz";
    }
})
*/


const refButton = document.getElementById("btnAccion");

refButton.addEventListener ("click", function(){
    document.body.classList.toggle("oscuro");
    let estaOscuro = document.body.classList.contains("oscuro")
    refButton.textContent =(estaOscuro)? "Encender la luz" : "Apagar la luz";
    
})
