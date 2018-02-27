
function Mostrar()
{

// sacar superficie y perimetro de un triangulo equilatero

var base;
base = parseInt(base);
var altura;
altura= parseInt(altura);
var perimetro;
perimetro= parseInt(perimetro);
var superficie;
superficie= parseInt(superficie);

base=document.getElementById('laBase').value;
altura = prompt("deme la altura");

superficie= base * altura / 2;
perimetro= base * 3;  

alert("La superficie es de " + superficie + " y el perimetro " + perimetro );












}
