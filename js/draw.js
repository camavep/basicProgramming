var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
console.log(lienzo);

lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "gray";
lienzo.moveTo(180, 10);
lienzo.lineTo(290, 280);
lienzo.stroke();
lienzo.closePath();