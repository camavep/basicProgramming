var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
console.log(lienzo);

dibujarLinea("gray", 10, 300, 220, 88);
dibujarLinea("green", 100, 100, 200, 200);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}