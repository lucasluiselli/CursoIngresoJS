function Mostrar()
{
 
 
 var numeroUno;
 var numeroDos;
 var numeroTres;
 var maximo;
 var minimo;
 

 numeroUno= prompt("Ingrese primer numero");
 numeroUno=parseInt(numeroUno);
numeroDos= prompt("Ingrese segundo numero");
numeroDos= parseInt(numeroDos);
numeroTres= prompt("Ingrese tercer numero");
numeroTres=parseInt(numeroTres);
 

 if (numeroUno >= numeroDos || numeroUno >= numeroTres)

	{
		maximo= numeroUno;
		
	} 

		else

		{
		
			if (numeroDos > numeroTres || numeroDos > numeroUno) 

		{
		maximo= numeroDos;

		}

	 		 if (numeroTres > numeroDos || numeroTres > numeroUno)

			{
				maximo= numeroTres;
										}
		}							


		

		if (numeroUno <= numeroDos || numeroUno <= numeroTres)

			{         
				minimo = numeroUno;

			} 
			else 
				{
					if  (numeroDos < numeroTres || numeroDos < numeroUno)

						{
							minimo= numeroDos;
						} 

					if (numeroTres < numeroDos || numeroTres < numeroUno)

						{
							minimo= numeroTres;
						}

					
				}


				maxmo = alert("el maximo es " + maximo);
				minimo= alert("el minimo es " + minimo);


}
