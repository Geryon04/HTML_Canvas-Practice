var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var selector = document.querySelector("input");
var boton = document.querySelector("button");
var comando = "";

function ingresarComando(){

}

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 100, 100);




if(selector.value == "brocha"){
    document.write("<script src=\"Brocha.js\"></script>");
    console.log(evento);
}
