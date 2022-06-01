//Creacion del menú
let fragNav = document.createDocumentFragment();
for ( let ruta in routes ) {
    if ("textoEnlace" in routes[ruta]) {
        let enlace = document.createElement("a"); // creo etiqueta <a></a>
        enlace.textContent = routes[ruta].textoEnlace; // <a>Home</a>
        enlace.href = ruta;
        fragNav.appendChild(enlace);
    }
}

const nav = document.querySelector("nav");
nav.addEventListener("click", manejarClickEnlace);
nav.appendChild(fragNav);

//refresh - Ante el response del server 
window.addEventListener("load", e => {
    let ruta = window.location.pathname;
    peticionarContenido(ruta);
})

//<-- o --> Manejo el evento de utilzar back o forward
window.addEventListener("popstate", e => {
    let ruta = window.location.pathname;
    peticionarContenido(ruta);
})

function manejarClickEnlace(e) {
    if (e.target.tagName == "A") {
        e.preventDefault();
        let ruta = e.target.getAttribute("href");
        history.pushState(null, null, ruta);
        peticionarContenido(ruta);
    }
}

function peticionarContenido(ruta) {
    
    if (ruta === "/") {
        history.replaceState(null, null, "/home");
        ruta = "/home"
    }

    if (ruta in routes == false) {
        ruta = "notFound";
    }

    if ("cache" in routes[ruta] && routes[ruta].cache != "") {
        pintarSeccion(routes[ruta].cache, routes[ruta].titulo);
        return;
    }
    
    const ajax = new XMLHttpRequest();
    ajax.open("get", routes[ruta].url);
    ajax.send();
    ajax.addEventListener("load", e => {
        
    routes[ruta].cache = ajax.response;
    pintarSeccion(ajax.response, routes[ruta].titulo);
    
    });
}

function pintarSeccion(response, titulo) {
    const section = document.getElementById("modulo");
    section.innerHTML = response;
    
    const scriptsMuertos = section.querySelectorAll("script");
    section.appendChild(revivirScripts(scriptsMuertos));
    
    document.title = titulo;
}

function revivirScripts(scriptsMuertos) {
    let arrSrc = [];
    scriptsMuertos.forEach(script => {
        arrSrc.push(script.getAttribute("src"));
        // script.remove();
    });
    let frag = document.createDocumentFragment();
    arrSrc.forEach(src => {
        let nuevoScript = document.createElement("script");
        nuevoScript.src = src;
        frag.appendChild(nuevoScript);
    });
    return frag;
}