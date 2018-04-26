
/*var listaClase = document.getElementsByClassName("miClase");
listaClase[0].style.color = '#EC1019';

/*function indice(){
	Number x = document.getElementById("cambio");
	estilo(x);
}*/

function estilo(){
	var x = document.getElementById("cambio");
	if(x.value==0){
		var color= 'red';
	}
	if(x.value==1){
		var color= 'blue';
	}
	if(x.value==2){
		var color= 'yellow';
	}
	if(x.value==3){
		var color= 'green';
	}
	if(x.value==4){
		var color= 'pink';
	}
	var listaClases = document.getElementsByClassName("miClase");
	listaClases[x.value].style.color = color;
}



//var miElementDOM = document.getElementById("miParrafo");
//document.getElementById("insertando").innerHTML = "vamos a agregar el contenido de p aquí" + miElementDOM.innerHTML;
//var arregloP = document.getElementsByTagName("p");
//alert("Hay " + arregloP.length + " etiquetas <p> en este documento");
//document.getElementById("insertando").innerHTML = '<span>' + ' El segundo parrafo, con indice 1: ' + arregloP[0].innerHTML + '</span>'

//document.getElementById("cambiandoAtributo").src = "img/fastfashion.jpg"
var lista = document.getElementById("miUl");
lista.removeChild(lista.childNodes[1]);
/*
lista.appendChild()
lista.replaceChild()
lista.createElement()
*/
document.getElementById("cambiaClase").setAttribute("class", "miDivAmarillo");

		/*Como modificar los atributos de una etiqueta:
document.getElementById("cambiaClase").className += "miDivAmarillo";
document.getElementById("cambiaClase").setAttribute("className", "miDivAmarillo")
*/