var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pantalla.clear();






var selector = document.querySelector("input");


if(selector.value == "point"){
    document.write("<script src=\"Point_Draw.js\"></script>");
}

if(selector.value == "brocha"){
    document.write("<script src=\"Brocha.js\"></script>");
}
