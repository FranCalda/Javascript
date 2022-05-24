//<li><a href="#Argentina">Argentina</a></li>

//Creacion de elementos al vuelo 

const misPaises = ["Argentina","Brasil","Colombia"]; 

const ul = document.getElementById("paises");

/*
contenido = "";
contenido += `<li><a href="#${misPaises[0]}">${misPaises[0]}</a></li>`; //TemplateString
contenido += `<li><a href="#${misPaises[1]}">${misPaises[1]}</a></li>`;
contenido += `<li><a href="#${misPaises[2]}">${misPaises[2]}</a></li>`;
ul.innerHTML = contenido;
*/

/*
contenido = "";

for(let i=0; i<misPaises.length; i++){
    contenido += `<li><a href="#${misPaises[i]}">${misPaises[i]}</a></li>`;
}
ul.innerHTML = contenido;

*/

//Creacion de elementos al vuelo
/*
misPaises.forEach(function(pais) {
    let objLi = document.createElement("li"); // <li></li>
    let objA = document.createElement("a"); // <a></a>
    objA.textContent = pais;  // <a>Argentina</a>
    objA.href = '#'+pais; // <a href = "#Argentina">Argentina</a>
    objLi.appendChild(objA); // <li><a href = "#Argentina">Argentina</a></li>
    // objLi.textContent = pais; // <li>Argentina</li>
    ul.appendChild(objLi); //Recibe un obj HTML Element
});
*/ 
/*const div = document.createElement("div");

misPaises.forEach(function(pais) {
    let objLi = document.createElement("li"); // <li></li>
    let objA = document.createElement("a"); // <a></a>
    objA.textContent = pais;  // <a>Argentina</a>
    objA.href = '#'+pais; // <a href = "#Argentina">Argentina</a>
    objLi.appendChild(objA); // <li><a href = "#Argentina">Argentina</a></li>
    // objLi.textContent = pais; // <li>Argentina</li>
    div.appendChild(objLi);
});

ul.appendChild(div); //Recibe un obj HTML Element
*/

const fragmento = document.createDocumentFragment(); //<></>

misPaises.forEach(function(pais) {
    let objLi = document.createElement("li"); // <li></li>
    let objA = document.createElement("a"); // <a></a>
    objA.textContent = pais;  // <a>Argentina</a>
    objA.href = '#'+pais; // <a href = "#Argentina">Argentina</a>
    objLi.appendChild(objA); // <li><a href = "#Argentina">Argentina</a></li>
    // objLi.textContent = pais; // <li>Argentina</li>
    fragmento.appendChild(objLi);
});

ul.appendChild(fragmento); //Recibe un obj HTML Element
// Los fragmentos cuando son pasados en un appendChild,
// sus hijos son transferidos al elemento y el fragmento se vacia

//Etiqueta template