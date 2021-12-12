var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("areaDibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {    
    var colorLinea = "green";
    var movimiento = 15;

    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorLinea, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break
        case teclas.DOWN:
            dibujarLinea(colorLinea, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorLinea, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break
        case teclas.RIGHT:
            dibujarLinea(colorLinea, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            break
        default:
            console.log("otra tecla")
            break;
    }
}