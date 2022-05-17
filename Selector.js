var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var selector = document.querySelector("input");
var boton = document.querySelector("button");
var comando;
var freno = false;


function ingresarComando() {
    comando = selector.value;
}

function cambiarPantalla() {
    comando = selector.value;
    if (comando == "brocha") {
        document.write("<script src=\"Brocha.js\"></script>");

    }
    console.log(comando);
}


boton.onclick = ingresarComando;
cambiarPantalla();




