/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno = document.getElementById('numeroUno'). value;
	numeroDos = document.getElementById('numeroDos'). value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resultado = numero1 % numero2;
	alert(resultado);
}
