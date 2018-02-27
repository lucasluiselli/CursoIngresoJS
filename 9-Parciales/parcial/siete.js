function Mostrar()
{

// ingresar dos datos: 1) letra           2) numero (entre menos 50 y mas 50)
//informar promedio de los numreos positivos
//cantidad de numeros impares
//suma de todos los numeros cuya letra haya sido una vocal
// numero maximo y la letra con la que fue ingresado

var letra;

var numero;
	numero= parseInt(numero);

//var promedio;
//	promedio=parseInt(numero);

//var numeroImpar;
//	numeroImpar= parseInt(numeroImpar);

//var maximo;
//	maximo=parseInt(maximo);

var respuesta="si";

var contador=0;
var acumuladorNum=0;



while (respuesta == "si")

	{

	contador++;	

	numero= prompt("Ingrese un numero entre -50 y 50");
		
	while(numero < -50 || numero > 50 )
		{
			numero=prompt("ingreselo nuevamente");

		}

		letra= prompt("Ingrese una letra");
			
			while(letra != isNaN)
				 { 
				 	letra= ("Ingrese nuevamente una letra");

				 }

		respuesta= prompt("Desea ingresar otro caracter ?? ");
	}

	alert("La letra es" + letra "y el numero es " + numero);





}
