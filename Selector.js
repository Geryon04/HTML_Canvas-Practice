var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");


pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 100, 100);


var selector = document.querySelector("input");

if(selector.value == "brocha"){
    document.write("<script src=\"Brocha.js\"></script>");
}
