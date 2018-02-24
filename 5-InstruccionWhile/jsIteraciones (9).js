function Mostrar()
{
	var numero;
	var contador=0;
	var maximo=0;
	var minimo=0;
	var respuesta="si";
	
	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero");
		contador++;

		if (contador == 1)
			{
				maximo = numero;
				minimo = numero;
			} else 

				{ if (numero > maximo) 

						{
							maximo = numero;

						}

				if (numero < minimo) 	
					{
						minimo = numero;
					}		

				}
	



	respuesta=prompt("Desa ingresar otro numero ??");
	}

document.getElementById("maximo").value=maximo;
document.getElementById("minimo").value=minimo;

}//FIN DE LA FUNCIÓN