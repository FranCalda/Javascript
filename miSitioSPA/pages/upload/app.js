//Funcion autoejecutable


(function(){
    const input = document.getElementById("dropzone-input");
    input.addEventListener("change", e => {
        console.dir(e.target.files);
    });
})();