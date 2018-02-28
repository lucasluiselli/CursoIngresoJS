//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
//Ingresar:pedimos nombre de un animal
//Ingresar: peso del animal (validar que sea mayor que cero)
// Ingresar: temperatura de habitat (entre -40 y +40)

//informar 1) cantidad de temperaturas pares ingresadas
// 2) las temper. impares
//3) nombre del animal mas pesado
//4) nombre del menos pesado
//5)cantidad de animales cuya temperatura habitat tiene menos de cero grado
// 6)promedio de peso de todos los animales
//7)temperatura maxima
//8)temperatura minima ingresadas

var animal;
var peso;
var pesoMinimo;
var pesoMaximo;
var acumuladorPeso;
var temperatura;
var temperaturasPares;
var temperaturasImpares;
var TempMaxima;//temperaturas maximas
var tempMinima;//temperaturas minimas
var respuesta="si";
var contador=0;
var Promedio;




while (respuesta != "no")
	{
		contador++;
		animal=prompt(" Ingrese un animal ");

		while(isNaN(animal))
			{
				animal=prompt("Ingrese un animal");
			}

		peso=prompt("Ingrese el peso del animal");
		peso=parseInt(peso);
		
		while(peso <= 0 || isNaN(peso))

			{
				peso=prompt("Ingrese peso nuevamente");
				peso=parseInt(peso);
			}	

			acumuladorPeso+=peso;
		
		temperatura=prompt("Ingrese un temperatura");
		temperatura=parseInt(temperatura);

		while (temperatura < -40 || temperatura > 40 || isNaN(temperatura))

			{
				temperatura= prompt("Ingrese temperatura nuevamente");
				temperatura=parseInt(temperatura);
			}

			//peso de los animales

			if(contador==1)
				{
					pesoMaximo=peso;
					pesoMinimo=peso;
				} else

					{ if (peso > pesoMinimo)

					pesoMaximo=peso;	

					}

					if(peso < pesoMinimo)
						{
							pesoMinimo=peso;
						}

			//Temperaturas pares e impares

			if (temperatura % 2 == 0 || temperatura != 0)

				{
					temperaturasPares++

				}	else 

					{ 

						if (temperatura != 0)
						{

							temperaturasImpares++;

						}

					}
			// temperaturas maximas y minimas


			if (contador==1)
				{
					TempMaxima= temperatura;
					tempMinima=temperatura;

				}	else 
						{


						{ if (temperatura > TempMaxima)

							{TempMaxima= temperatura;

						}				

						  if (temperatura < tempMinima)

						  	{ temperatura= tempMinima

						  	 }

			if (contador==1)
								{
									pesoMaximo=peso;
									pesoMinimo=peso;

								}


				else  
							{
								if(pesoMaximo> peso)

									(pesoMaximo=peso)

							}				

								if (pesoMinimo< peso) 

										{
											pesoMinimo=peso;
											}
										



			promedio= peso / contador;






						}



// ejercicio 4 parcial 							
// Se ingresan dos numeros
//Si son iguales se concatenan
// si el primer es mayor que el sgundo se multiplican
// si el segundo es mas grande se restan
// si la multiplicacion da un numero par mostrar resultado + es par

	


//informarar 1) cantidad de temperaturas pares ingresadas
		



// 2) las temper. impares



//3) nombre del animal mas pesado




//4) nombre del menos pesado



//5)cantidad de animales cuya temperatura habitat tiene menos de cero grado




// 6)promedio de peso de todos los animales




//7)temperatura maxima




//8)temperatura minima ingresadas




			respuesta=prompt("Desea ingresar otra cosa");

	}





	document.write("cantidad de temp pares" + temperaturasPares);
	document.write("cantidad de temp impares" + temperaturasImpares);
	document.write(" el animal mas pesado es el " + animal + pesoMaximo);
	document.write(" el animal menos pesado es el " + animal + pesoMinimo);							
   










	
}

