var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey"
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    pincel.fillStyle = "blue"
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*3.14);
    pincel.fill();

    console.log(x + " " + y);
}

function alterarColor(){
    alert("funciono");
    return false;
}

pantalla.onclick = dibujarCirculo;
pantalla.oncontextmenu = alterarColor;