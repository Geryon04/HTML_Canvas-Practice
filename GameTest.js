var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//arrow key codes
var UP = 38;
var DOWN = 40;
var RIGHT = 39;
var LEFT = 37;

//position
var posX = 20;
var posY = 150;

function scene() {
    //background
    pincel.fillStyle = "rgb(100, 150, 200)";
    pincel.fillRect(0, 0, 600, 400);

    //floor
    pincel.fillStyle = "rgb(0, 0, 0)";
    pincel.fillRect(0, 350, 600, 50);

    //plataform test
    pincel.fillRect(200, 250, 100, 30);
}

//Character test
function character(x, y) {
    pincel.beginPath()
    pincel.arc(x, y, 20, 0, 2 * Math.PI);
    pincel.fill();
}

//update screen
function clearScreen() {
    pincel.clearRect(0, 0, 600, 400);
    scene();
}

//character movement
function movement() {
    clearScreen();
    if (posX <= 500 && posY > 20) {
        character(posX, posY);
        posY = posY - 1;
        posX = posX + 1;
        console.log(posX + " " + posY);
    }
    
}
setInterval(movement, 50);

