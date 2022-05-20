//Comportamiento de primitivos (numbers, string, boolean, null, undefined)
var a = 10;
var b = a;

a++;
console.log(a);//10
console.log(b);//11

//Comportamiento de objetos

var r = {nombre: "juan" , estudia: true, edad: 25 };
var s = r;//copio la referencia

r.edad++;
console.log(r.edad);//26
console.log(s.edad);//26
