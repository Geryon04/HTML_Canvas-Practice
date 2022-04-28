var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//Celeste
pincel.fillStyle = "blue";
pincel.fillRect(0, 0, 600, 100);
pincel.fillRect(0, 300, 600, 100);

//cuadricula
pincel.strokeStyle = "black";
pincel.strokeRect(0, 0, 600, 400);