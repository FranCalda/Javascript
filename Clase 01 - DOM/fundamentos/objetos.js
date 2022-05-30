var colores = ["red","green","blue"];

//Objeto
var persona = {
    nombre:"Juan", //propiedad (clave, valor)
    edad: 19, 
    estudia: true,
    saludar: function(){ console.log("Hola")} //metodo
};

//Array accede a los valores con notacion de corchetes
console.log(colores[1]);

//Notacion por punto (preferible)
persona.nombre = "Luis";
console.log(persona.nombre);
persona.saludar();

//Notacion de corchetes (acceso dinamico)
persona["edad"]= 35;
console.log(persona["edad"]);
persona["saludar"]();