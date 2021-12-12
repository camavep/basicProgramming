var numero_lineas = document.getElementById("num_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");
console.log(lienzo);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

var lineas_for = 30;
var xi, yf;

for (let l2 = 0; l2 < lineas_for; l2++) {
    xi = 10 * l2;
    yf = 10 * (l2+1);
    dibujarLinea("#008f39", xi, 0, 300, yf);  
}

dibujarLinea("#008f39", 88, 100, 200, 200);

dibujarLinea("#008", 1, 1, 1, 300);
dibujarLinea("#088", 1, 299, 299, 299);

dibujarLinea("#088", 1, 1, 300, 1);
dibujarLinea("#008", 299, 1, 299, 299);

function dibujoPorClick() {
    var num_lineas = parseInt(numero_lineas.value);
    var l = 0
    var yi, xf;
    var espacio = ancho / num_lineas;

    while (l < num_lineas) {
        yi = espacio * l;
        xf = espacio * (l+1);
        dibujarLinea("gray", 0, yi, xf, 300);
        //l = l+1;
        l++;
    }
}