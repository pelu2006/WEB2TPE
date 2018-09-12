"use strict";

let arreglo_cartas = [];//en este arreglo se carga el src de cada carta
let arreglo_cartasMin = [];//en este arreglo se carga una letra para indicar el tipo de carta
let arreglo_elegidas = [];//en este arreglo se carga el tipo de carta seleccionada
let path = "../img/";//ruta donde estan las imagenes
let cbomb = 0;//variable para utilizar como bandera de bombas
let contX = 0;//Cuenta la cantidad de marcas que hay en juego, si es 0 la partida es GANADA
let contAciertos = 0;//cuenta la cantidad de aciertos
let contErrores = 0;//cuenta la cantidad de errores
let contGanados = 0;//cuenta la cantidad de partidas ganadas
//let txttiempo = document.getElementById('tiempo').value;



/*
document.getElementById("mezclar").addEventListener("click", function(event){
    event.preventDefault()
});
*/


//esta funcion se ejecuta al iniciar y cada vez que gano una partida o explota una bomba
function mezclar(tipo){

/*	if(txttiempo == null || txttiempo.length == 0 || isNaN(txttiempo)){
		alert('ERROR: Carga de tiempo erronea, se deja por defecto 3 segundos');
		txttiempo = 3000;
//		return false;
	}else{
		txttiempo = txttiempo * 1000;
//		return true;
	}
	*/
	console.log("mezclar");
//	console.log("txttiempo" + txttiempo);

	arreglo_cartas.splice(0,arreglo_cartas.length);
	arreglo_cartasMin.splice(0,arreglo_cartasMin.length);
	arreglo_elegidas.splice(0,arreglo_elegidas.length);

	//Inicializo el vector que me indica cuales son las cartas elegidas en 0
	for (var i = 0; i < 8; i++) {
		arreglo_elegidas[i]="0";
	}
	
	console.log ("largo arreglo_cartas" + arreglo_cartas.length);

	contX = 0;

	for (var i = 1; i < 9; i++) {
		asignaCarta(i,tipo);
	}

	
	var ele = document.getElementsByName("carta");
   	for(var i=0;i<ele.length;i++)
      ele[i].checked = false;

	
	guardarCartas();

	setInterval(rotarCartas,5000);
	console.log ("mezclar -->" + arreglo_cartas.length);
	console.log ("marcadas -->" + contX);

	mostrar();

	Verificar();//Entramos a verificar ni bien arranca el juego porque si no hay ninguna marca el juego se considera GANADO

}

//Esta funcion asigna la carta correspondiente a cada de forma aleatoria
function asignaCarta(nCarta,tipo) {
//	console.log("asignaCarta--->" + nCarta);
	let cRec = Math.floor((Math.random() * 10));
	
	if (tipo=1){
		if (cRec<=1) {
			document.getElementById("carta"+nCarta).src = path + "CartaBomba.png"; 
			arreglo_cartasMin.push("B");
		} else if ((isNaN(cRec) || cRec < 1 || cRec > 5)  && (nCarta>1)){
			document.getElementById("carta"+nCarta).src = path + "CartaLibre.png"; 
			arreglo_cartasMin.push("L");
		} else {
			document.getElementById("carta"+nCarta).src = path + "CartaMarcada.png"; 
			arreglo_cartasMin.push("X");
			contX ++;
		}
	}else{
		//Se le agrega la condicion && nCarta>1 para asegurarnos de que la primera carta esté marcada (requerimiento opcional)
		if (cRec<=1 && nCarta>1) {
			document.getElementById("carta"+nCarta).src = path + "CartaBomba.png"; 
			arreglo_cartasMin.push("B");
		} else if ((isNaN(cRec) || cRec < 1 || cRec > 5)  && (nCarta>1)){
			document.getElementById("carta"+nCarta).src = path + "CartaLibre.png"; 
			arreglo_cartasMin.push("L");
		} else {
			document.getElementById("carta"+nCarta).src = path + "CartaMarcada.png"; 
			arreglo_cartasMin.push("X");
			contX ++;
		}
	
	}
	
}

//cargo arreglo_cartas con los valores de src definidos anteriormente 
function guardarCartas() {

	let valor_item1 = document.getElementById("carta1").src;
	let valor_item2 = document.getElementById("carta2").src;
	let valor_item3 = document.getElementById("carta3").src;
	let valor_item4 = document.getElementById("carta4").src;  
	let valor_item5 = document.getElementById("carta5").src;
	let valor_item6 = document.getElementById("carta6").src;
	let valor_item7 = document.getElementById("carta7").src;
	let valor_item8 = document.getElementById("carta8").src;  
	
	arreglo_cartas.push(valor_item1);
	arreglo_cartas.push(valor_item2);
	arreglo_cartas.push(valor_item3);
	arreglo_cartas.push(valor_item4);
	arreglo_cartas.push(valor_item5);
	arreglo_cartas.push(valor_item6);
	arreglo_cartas.push(valor_item7);
	arreglo_cartas.push(valor_item8);  
	
	console.log("VALORES arreglo_cartasMin");
	console.log("1-" + arreglo_cartasMin[0] + " 2-" + arreglo_cartasMin[1] + " 3-" + arreglo_cartasMin[2] + " 4-" + arreglo_cartasMin[3]);
	console.log("5-" + arreglo_cartasMin[4] + " 6-" + arreglo_cartasMin[5] + " 7-" + arreglo_cartasMin[6] + " 8-" + arreglo_cartasMin[7]);
}

//Muestro todas las cartas del reverso
function rotarCartas(){
	for (var i = 1; i < 9; i++) {
		document.getElementById("carta"+i).src=path + "reversoCarta.png";
	}
}

//esta funcion solo la utilizo para saber a traves de la consola cuales son las cartas que ya fueron elegidas
function mostrar() {
	console.log ("E1->" + arreglo_elegidas[0] + " E2->" + arreglo_elegidas[1] + " E3->" + arreglo_elegidas[2] + " E4->" + arreglo_elegidas[3]);
	console.log ("E5->" + arreglo_elegidas[4] + " E6->" + arreglo_elegidas[5] + " E7->" + arreglo_elegidas[6] + " E8->" + arreglo_elegidas[7]);
	
}

//Funcion que se dispara de los radiobuttons
function elegirCarta(nCarta){
	console.log (arreglo_cartasMin[nCarta]);
	console.log ("ncarta--->" + nCarta);
	
	console.log (arreglo_elegidas[nCarta]);
	
	mostrar();
	
	if (arreglo_elegidas[nCarta]=="0"){//Compruebo si la carta seleccionada ya fue elegida
		document.getElementById("dvCarta"+ (nCarta+1)).innerHTML = "<img id='carta" + (nCarta+1) + "' src='" + arreglo_cartas[nCarta] + "'/>";//muestro la carta seleccionada
		
		if (arreglo_cartasMin[nCarta]=="B"){//En caso de ser una Bomba
			alert("BOOM!!!. Acaba de perder el juego \n Ha ganado " + contGanados + " partidas. \n Ha encontrado " + contAciertos + " cartas marcadas. \n Ha tenido " + contErrores + " errores.");
			contGanados = 0;
			contAciertos = 0;
			contErrores = 0;
			
			//Reseteo el tablero
			document.getElementById("dvAciertos").innerHTML = "Cantidad de aciertos: " + contAciertos;
			document.getElementById("dvErrores").innerHTML = "Cantidad de errores: " + contErrores;
			document.getElementById("dvGanados").innerHTML = "Cantidad de partidas ganadas: " + contGanados;
			mezclar();
		} else if (arreglo_cartasMin[nCarta]=="X") {//en caso de que se trate de una carta marcada
			contX = contX-1;
			contAciertos ++;
			document.getElementById("dvAciertos").innerHTML = "Cantidad de aciertos: " + contAciertos;
			arreglo_elegidas[nCarta] = arreglo_cartasMin[nCarta];
		}
		else{//Si no es bomba o una carta marcada entonces es una carta libre
			contErrores ++;
			document.getElementById("dvErrores").innerHTML = "Cantidad de errores: " + contErrores;
			arreglo_elegidas[nCarta] = arreglo_cartasMin[nCarta];
		}
		Verificar();
		console.log ("X---->" + contX);
		
	}else{
		alert ("Ya selecciono esa carta. \n Por favor seleccione otra.");
	}
	
}




function elijoCarta(){
	
	let porNombre=document.getElementsByName("carta");
	let nCarta=0;
	// Recorremos todos los valores del radio button para encontrar el
	// seleccionado
	for(let i=0;i<porNombre.length;i++)
	{
		if(porNombre[i].checked)
		nCarta=porNombre[i].value;
	}
	
	console.log (arreglo_cartasMin[nCarta]);
	console.log ("ncarta--->" + nCarta);
	
	console.log (arreglo_elegidas[nCarta]);
	
	mostrar();
	console.log ("nCarta"+nCarta);
	
	if (arreglo_elegidas[nCarta]=="0"){//Compruebo si la carta seleccionada ya fue elegida
		document.getElementById("dvCarta"+ (nCarta+1)).innerHTML = "<img id='carta" + (nCarta+1) + "' src='" + arreglo_cartas[nCarta] + "'/>";//muestro la carta seleccionada
		
		if (arreglo_cartasMin[nCarta]=="B"){//En caso de ser una Bomba
			alert("BOOM!!!. Acaba de perder el juego \n Ha ganado " + contGanados + " partidas. \n Ha encontrado " + contAciertos + " cartas marcadas. \n Ha tenido " + contErrores + " errores.");
			contGanados = 0;
			contAciertos = 0;
			contErrores = 0;
			
			//Reseteo el tablero
			document.getElementById("dvAciertos").innerHTML = "Cantidad de aciertos: " + contAciertos;
			document.getElementById("dvErrores").innerHTML = "Cantidad de errores: " + contErrores;
			document.getElementById("dvGanados").innerHTML = "Cantidad de partidas ganadas: " + contGanados;
			mezclar();
		} else if (arreglo_cartasMin[nCarta]=="X") {//en caso de que se trate de una carta marcada
			contX = contX-1;
			contAciertos ++;
			document.getElementById("dvAciertos").innerHTML = "Cantidad de aciertos: " + contAciertos;
			arreglo_elegidas[nCarta] = arreglo_cartasMin[nCarta];
		}
		else{//Si no es bomba o una carta marcada entonces es una carta libre
			contErrores ++;
			document.getElementById("dvErrores").innerHTML = "Cantidad de errores: " + contErrores;
			arreglo_elegidas[nCarta] = arreglo_cartasMin[nCarta];
		}
		Verificar();
		console.log ("X---->" + contX);
		
	}else{
		alert ("Ya selecciono esa carta. \n Por favor seleccione otra.");
	}
	
}
//Esta funcion verifica si encontre la ultima marca 
function Verificar()
{
	if (contX==0){
		contGanados ++;
		document.getElementById("dvGanados").innerHTML = "Cantidad de partidas ganadas: " + contGanados;
		if(multiple(contGanados,3)){
			alert("HAS GANADO!!!!!! " + contGanados + " partidas \n FELICITACIONES!!!!!!!")
		} 
		mezclar();
	};


}

function multiple(valor, multiple)
{
	let resto = 0;
	resto = valor % multiple;
	if(resto==0)
		return true;
	else
		return false;
}
