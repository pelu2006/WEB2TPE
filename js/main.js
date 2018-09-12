//document.addEventListener("DOMContentLoad", load);
"use strict";
let divInicio = document.getElementById("contenido");


/*
function load(){
	cambiaPiel("Inicio");
	console.log("load");
}


*/

function load_home(){
            document.getElementById("contenido").innerHTML='<object type="type/html" data="../html/carta2.html" ></object>';
  }

function cambiaPiel(origen){
	console.log ("origen:" + origen);
	if (origen=="Programas"){
		document.getElementById("contenido").innerHTML = "<table class='centrada'><tr><th>Horario</th><th>Television</th><th>Radio</th></tr><tr><td>9:00 a 11:00</td><td><img class='pgm' src='img/TV01.jpg'/>Programa TV 1</td><td><img class='pgm' src='img/RADIO01.png'/>Programa Radio 1</td></tr><tr><td>11:00 a 13:00</td><td><img class='pgm' src='img/TV02.jpg'/>Programa TV 2</td><td><img class='pgm' src='img/RADIO02.png'/>Programa Radio 2</td></tr><tr><td>13:00 a 15:00</td><td><img class='pgm' src='img/TV03.jpg'/>Programa TV 3</td><td><img class='pgm' src='img/RADIO03.jpg'/>Programa Radio 3</td></tr><tr><td>15:00 a 17:00</td><td><img class='pgm' src='img/TV04.jpg'/>Programa TV 4</td><td><img class='pgm' src='img/RADIO04.jpg'/>Programa Radio 4</td></tr><tr><td>17:00 a 19:00</td><td><img class='pgm' src='img/TV05.png'/>Programa TV 5</td><td><img class='pgm' src='img/RADIO05.jpg'/>Programa Radio 5</td></tr><tr><td>19:00 a 21:00</td><td><img class='pgm' src='img/TV06.png'/>Programa TV 6</td><td><img class='pgm' src='img/RADIO06.jpg'/>Programa Radio 6</td></tr></table>";
	}
	else if (origen=="Remates"){
		document.getElementById("contenido").innerHTML = "<p class='sub-title'>Arriba de los auspiciantes<br /> y sponsors del sitio</p><p class='sub-title'>agregaremos informacion<br /> que este relacionada</p><p class='sub-title'>a remates ganaderos<br /> y de hacienda</p><p><div class='contenedor'><img class='sponsors' src='img/sponsor.jpg' alt='Auspiciante XXXXX'></div><div class='contenedor'><a href='html/cartas.html'><img src='img/CartaBomba.png' alt='Juega MEMOTUDAI'><div class='texto-encima'>DIVIERTETE JUGANDO</div><div class='centrado'>MEMOTUDAI</div></div><div class='contenedor'><img class='sponsors' src='img/sponsor.jpg' alt='Auspiciante XXXXX'></div></p><p><div class='contenedor'><img class='sponsors' src='img/sponsor.jpg' alt='Auspiciante XXXXX'></div><div class='contenedor'><img class='sponsors' src='img/sponsor.jpg' alt='Auspiciante XXXXX'></div><div class='contenedor'><img class='sponsors' src='img/sponsor.jpg' alt='Auspiciante XXXXX'></div></p>";
	}
	else if (origen=="Contacto"){
		document.getElementById("contenido").innerHTML = "<form action='index.html' onsubmit='return validarFormulario()'><label for='nombre'><span>Nombre:</span></label><input id='nombre' name='nombre' type='text' required><br><br><label for='edad'><span>Edad:</span></label><input id='edad' name='edad' type='text' required><br><br><label for='correo'><span>Correo electronico:</span></label><input id='correo' name='correo' type='text' required><br><br><label for='fecha'><span>Fecha:</span></label><input id='fecha' name='fecha' type='date' required><br><br><label for='selector'><span>Selecciona una opcion:</span></label><select id='selector' name='selector' required><option value=''>Elija un Programa</option><option value='1'>Programa TV 1</option><option value='2'>Programa TV 2</option><option value='3'>Programa TV 3</option><option value='1'>Programa Radio 1</option><option value='2'>Programa Radio 2</option><option value='3'>Programa Radio 3</option></select><br><br><label for='mensaje'><span>Mensaje:</span></label><textarea id='mensaje' name='mensaje' rows='10' cols='60' required></textarea><input type='submit' value='Enviar'></form>";
	}
	else {
		document.getElementById("contenido").innerHTML = "<h1>Daulerio Producciones</h1><p class='sub-title'><strong>Aprovecharemos este espacio</strong> <br /> para agregar una descripcion informativa del sitio</p>";
	}

}
