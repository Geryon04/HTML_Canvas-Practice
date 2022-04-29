var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//Celeste
pincel.fillStyle = "blue";
pincel.fillRect(0, 0, 600, 100);
pincel.fillRect(0, 300, 600, 100);

//cuadricula
pincel.strokeStyle = "black";
pincel.strokeRect(0, 0, 600, 400);

//circulo
pincel.fillStyle = "Yellow";
pincel.arc(300, 200, 20, 0, 2*3.14);