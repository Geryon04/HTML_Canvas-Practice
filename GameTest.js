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

//arrow key codes
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//position
var posX = 0;
var posY = 150;

//Character test
function character(x, y) {
    pincel.beginPath()
    pincel.arc(x, y, 20, 0, 2 * Math.PI);
    pincel.fill();
}

//update screen
function clearScreen() {
    pincel.clearRect(0, 0, 600, 400);
}

//character movement
function movement(x, y) {
    while(x <= 300){
        x = x + 5;
    }
    character(x, y);
}
setInterval(movement(posX, posY), 50);

