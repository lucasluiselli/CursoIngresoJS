function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while(respuesta== "si")

	{
		contador++;
		numero= parseInt(prompt("Ingrese numero"));
		acumulador+= numero;
		respuesta=prompt("Desea ingresar otro ??");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN