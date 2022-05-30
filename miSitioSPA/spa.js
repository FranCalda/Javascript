const enlace = document.querySelector("a");

enlace.addEventListener("click", manejarClickEnlace);

function manejarClickEnlace(e){
    e.preventDefault();
    peticionarContenido();

}

function peticionarContenido(){
    const ajax = new XMLHttpRequest ();
    ajax.open("get", "./pages/home.html");
    // ajax.setRequestHeader("Content-lenght", 26);
    ajax.send();
    ajax.addEventListener("load", e=> {
        const section = document.getElementById("modulo");
        section.innerHTML = ajax.response;
    })
    // console.log(ajax.response);

}