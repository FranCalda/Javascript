//ES5
var sumar = function (){ //Expression
    console.log (a,b);
    return (a+b);
};

//ES6

const sumarX = (a, b) => { //Expression
    console.log (a,b);
    return (a+b);
}

//------------------------------------

//ES5
var restar = function (){ 
    return (a-b);
};

//ES6 
const restarX = (a, b) => a-b;
//------------------------------------
//ES5
var duplicar = function(m){
    return m*2;
}
//ES6
const duplicarX = m => m*2;
//------------------------------------
//ES5
var mostrar = function(){
    console.log("Hola");
}
//ES6
const mostrar= () => console.log("Hola");
//------------------------------------
//ES5
var retornaObjeto = function(){
    return {nombre:"Juan", edad:25}; 
}
//ES6
const retornaObjetoX = () => ({nombre:"Juan", edad:25});