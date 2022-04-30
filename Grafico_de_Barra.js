function dibujarRectangulo(x, y, base, altura, color){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle = color;
    pincel.fillRect(x, y, base, altura);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x, y, base, altura);
}

function escribirTexto(x, y, texto){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.font = "15px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(texto, x, y);
}