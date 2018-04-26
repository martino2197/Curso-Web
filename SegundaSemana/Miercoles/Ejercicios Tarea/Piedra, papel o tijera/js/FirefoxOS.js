function ejecutar(){

	self.location= 'juego.html';


}

function jugar()
{


	var opcion = document.foropcion;

	if ((!opcion.radio[0].checked)&&(!opcion.radio[1].checked)&&(!opcion.radio[2].checked))
	{
		alert('No se ha seleccionado ninguna opcion')
		self.location= 'juego.html'
	}


	if (opcion.radio[0].checked)
	{
   //piedra
   document.getElementById('usuario').innerHTML='<img src=\"imagenes/piedra.jpg\" width=\"70\" height=\"70\">';
   var a= maquina();
   if(a==1){
   	alert('Empate!!!')
   }
   if(a==2){
   	alert('Perdiste!!!')
   }
   if(a==3){
   	alert('Ganaste!!!')
   }


}

if (opcion.radio[1].checked)
{
   //papel
   document.getElementById('usuario').innerHTML='<img src=\"imagenes/papel.jpg\" width=\"70\" height=\"70\">';
   var a= maquina();
   if(a==1){
   	alert('Ganaste!!!')
   }
   if(a==2){
   	alert('Empate!!!')
   }
   if(a==3){
   	alert('Perdiste!!!')
   }
}

if (opcion.radio[2].checked)
{
   //tijera
   document.getElementById('usuario').innerHTML='<img src=\"imagenes/tijera.jpg\" width=\"70\" height=\"70\">';
   var a= maquina();
   if(a==1){
   	alert('Perdiste!!!')
   }
   if(a==2){
   	alert('Ganaste!!!')
   }
   if(a==3){
   	alert('Empate!!!')
   }
}



}

function maquina()
{
	var aleatorio = Math.floor(Math.random() * 3) + 1;
	//Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

	document.getElementById('maquina').innerHTML="<h2>La maquina elije:</h2>";

	if (aleatorio == 1)
	{
		document.getElementById('maquina1').innerHTML="<br /><img src=\"imagenes/piedra.jpg\" width=\"70\" height=\"70\">";
	}
	if (aleatorio == 2)
	{
		document.getElementById('maquina1').innerHTML="<br /><img src=\"imagenes/papel.jpg\" width=\"70\" height=\"70\">";

	}
	if (aleatorio == 3)
	{
		document.getElementById('maquina1').innerHTML="<br /><img src=\"imagenes/tijera.jpg\" width=\"70\" height=\"70\">";

	}

	document.getElementById('volver').innerHTML='<br><button class=\"btn btn-primary\" onclick=\"inicio()\">Volver a jugar</button>';

	return aleatorio;

}

function inicio()
{
	self.location= 'juego.html';
}

function inicio2()
{
	self.location= 'index.html';
}
