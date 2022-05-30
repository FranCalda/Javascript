/*function sumar (){
    console.log(a,b);
    console.log(arguments); // array-like;
    return a+b;
}
*/
/*
function sumar (){
    let total = 0;
    // for(let i=0;i<arguments.length;i++){
    //     total+=arguments[i];
    // }
    // return total;
    
    let argumentos = Array.from(arguments);
    arguments.forEach (function(valor){
        total+=valor;
    }
    return total;
    )
}
*/
function sumar (...valores){
    let total = 0;
    valores.forEach(function(v){
        total += v;
    });
    
    return total;
}

let resultado = sumar(10,20,30,500);

console.log(resultado);

//Array-like:
/* 
-arguments
-HTML Collection (getElements)
-Node list  (querySelectorAll)

*/