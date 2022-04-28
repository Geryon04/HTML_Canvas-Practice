var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//Black
pincel.fillStyle = "black";
pincel.beginPath();
pincel.moveTo(50, 50);
pincel.lineTo(50, 400);
pincel.lineTo(400, 400);
pincel.fill();

//White
pincel.fillStyle = "white";
pincel.beginPath();
pincel.moveTo(100, 175);
pincel.lineTo(100, 350);
pincel.lineTo(275,350);
pincel.fill();

pincel.beginPath();
pincel.moveTo(50, 50);
pincel.lineTo(50, 400);