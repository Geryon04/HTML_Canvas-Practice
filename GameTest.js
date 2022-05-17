var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//background
pincel.fillStyle = "rgb(100, 150, 200)";
pincel.fillRect(0, 0, 600, 400);

//floor
pincel.fillStyle = "rgb(0, 0, 0)";
pincel.fillRect(0, 350, 600, 50);


