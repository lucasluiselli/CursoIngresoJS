function Mostrar()
// Ingreso de alumno, no sabemos cuantos hay. Vamos a pedir nombre, cuantos alumnos ingresen
{// cargar alumnos, cargar nota cada nota y hacer el promedio, sexo

 
 var nombre;
 var sexo;
 var nota;
 var promedio = 0;
 var contadorAlumno=0;
 var respuesta="si";
 var acumulador=0;
 var acumuladorV=0;
 var acumuladorM=0;

while (respuesta != "no")

		{
				
			nombre = prompt("Ingrese nombre del alumno");
				
			contadorAlumno++;

			nota= parseInt(prompt("Ingrese nota"));
			while(nota < 0 || nota > 10 )
					{
						nota=prompt("Ingrese nuevamente la nota");
					}

					acumulador=acumulador + nota;
					promedio= nota / contadorAlumno;


			sexo= prompt("Ingrese sexo");
			while(sexo != "v" && sexo != "m" )
					{
						sexo=prompt("Ingrese nuevamente el sexo");

					}				

					if (sexo="v")
						{
							acumuladorV++;	
						} 	
					else if (sexo="m")

						{
							acumuladorM++; 
						} 


			document.write("cantidad de alumnos" + contadorAlumno );

			
		}
		












}
