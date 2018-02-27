function Mostrar()
{
  
// pedir precio y porcentaje de descuento. Mostrar importe final
var importe;
var importeFinal;
var descuento;
importe= prompt("Cuanto vale ??");
descuento=prompt("porcentaje de descuento ?");
descuento = importe * descuento / 100;

importeFinal= importe - descuento;
importeFinal = document.getElementById('importeFinal').value= importeFinal;
 






}
