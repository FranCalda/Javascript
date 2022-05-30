var total = 10;
console.log("Inicio");
console.log("anonymus1");
console.log("anonymus2");
primera();
console.log("anonymus3");
console.log("Fin");


//-----------------------
function primera(){
    var cantidad = 0;
    console.log("primera1");
    console.log("primera2");
    cantidad++;
    total++;
    segunda();
    console.log("primera3");
}

function segunda(){
    total++;
    var algo =10;
    console.log("segunda 1");
    console.log("segunda 2");
    console.log("segunda 3");
}

//---------------------------