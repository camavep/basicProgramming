var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
console.log(lienzo);
var lineas = 30;
var l = 0
var yi, xf;
var xi, yf;

while (l < lineas) {
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea("gray", 0, yi, xf, 300);
    //l = l+1;
    l++;
}

for (let l2 = 0; l2 < lineas; l2++) {
    xi = 10 * l2;
    yf = 10 * (l2+1);
    dibujarLinea("#008f39", xi, 0, 300, yf);  
}

dibujarLinea("#008f39", 88, 100, 200, 200);

dibujarLinea("#008", 1, 1, 1, 300);
dibujarLinea("#088", 1, 299, 299, 299);

dibujarLinea("#088", 1, 1, 300, 1);
dibujarLinea("#008", 299, 1, 299, 299);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}