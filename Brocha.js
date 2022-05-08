var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var puedoDibujar = false;

//variable para dibujar la paleta
var xRojo = 0;
var xVerde = 50;
var xAzul = 100;
var yCuadrados = 0;
var tamanioCuadrados = 50;

function dibujarCirculo(evento){
    if(puedoDibujar){
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;
        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2 * Math.PI);
        pincel.fill();
    }
}

//Funcion para dibujar cada uno de los cuadrados de la paleta
function dibujarCuadrado(x, y, tamanio, color){
    pincel.fillStyle = color;
    pincel.fillRect(x, y, tamanio, tamanio);
    pincel.fill();
}

//Funcion para dibujar la paleta de colores
function dibujarPaletaColores(){
    dibujarCuadrado(xRojo, yCuadrados, tamanioCuadrados, "red");
    dibujarCuadrado(xVerde, yCuadrados, tamanioCuadrados, "green");
    dibujarCuadrado(xAzul, yCuadrados, tamanioCuadrados, "blue");
}

function habilitarDibujar(){
    puedoDibujar = true;
}


function deshabilitarDibujar(){
    puedoDibujar = false;
}

pantalla.onmousemove = dibujarCirculo;
pantalla.onmousedown = habilitarDibujar;
pantalla.onmouseup = deshabilitarDibujar;