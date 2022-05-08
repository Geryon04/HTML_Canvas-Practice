var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var puedoDibujar = false;

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

function habilitarDibujar(){
    puedoDibujar = true;
}


function deshabilitarDibujar(){
    puedoDibujar = false;
}

pantalla.onmousemove = dibujarCirculo;
pantalla.onmousedown = habilitarDibujar;
pantalla.onmouseup = deshabilitarDibujar;