var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

//Cabeza
pincel.fillStyle = "darkgreen";
pincel.fillRect(200, 50, 350, 300);

//Ojos
pincel.fillStyle = "black";
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 100, 90, 90);

//Nariz
pincel.fillRect(340, 200, 70, 100);

//Boca
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);