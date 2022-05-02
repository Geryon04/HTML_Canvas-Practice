var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

function dibujarFlor() {

    dibujarCirculo(300, 220, 15, "blue");
    dibujarCirculo(300, 200, 15, "red");
    dibujarCirculo(300, 180, 15, "yellow");
    dibujarCirculo(280, 200, 15, "orange");
    dibujarCirculo(320, 200, 15, "black");
}

dibujarFlor();