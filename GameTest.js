var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//background
pincel.fillStyle = "rgb(100, 150, 200)";
pincel.fillRect(0, 0, 600, 400);

//floor
pincel.fillStyle = "rgb(0, 0, 0)";
pincel.fillRect(0, 350, 600, 50);

//plataform test
pincel.fillRect(200, 250, 100, 30);

//Character test
pincel.beginPath()
pincel.arc(20, 300, 20, 0, 2 * Math.PI);
pincel.fill();

//position
var posX = 0;
var posY = 50;

//update screen
function clearScreen(){
    pincel.clearRect(0, 0, 600, 400);
}

//character movement
function movement(evento, x, y){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
}


