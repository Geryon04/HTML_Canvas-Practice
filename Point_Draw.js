var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey"
pincel.fillRect(0, 0, 600, 400);
var colores = ["blue", "red", "green"];
var indiceColorActual = 0;

function dibujarCirculo(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    pincel.fillStyle = colores[indiceColorActual];
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*3.14);
    pincel.fill();

    console.log(x + " " + y);
}

function alterarColor(){
    indiceColorActual++;
    alert(indiceColorActual);
    return false;
}

pantalla.onclick = dibujarCirculo;
pantalla.oncontextmenu = alterarColor;