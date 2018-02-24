function Mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta="si";

	while(respuesta != "no")
		{
		numero=prompt("Ingrese un numero");

			numero= parseInt(numero);
			contador++;
			
			if (numero > 0)
				{
					positivo= positivo + numero;

				}

				else  if (numero < 0)

				{
					negativo= negativo * numero;

				}
			
				respuesta=confirm("Desea ingresar otro numero");	



		}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN