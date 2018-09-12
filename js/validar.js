"use strict";

function validarFormulario(){
 
	let txtNombre = document.getElementById('nombre').value;
	let txtEdad = document.getElementById('edad').value;
	let txtCorreo = document.getElementById('correo').value;
	let txtFecha = document.getElementById('fecha').value;
	let cmbSelector = document.getElementById('selector').selectedIndex;
	let txtMensaje = document.getElementById('mensaje').value;
	let pgmElegido = "";
	let combo = document.getElementById("selector");

	let banderaRBTN = false;

	//Test campo obligatorio
	if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
		alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
		return false;
	}
 
	//Test edad
	if(txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)){
		alert('ERROR: Debe ingresar una edad valida');
		return false;
	}
 
	//Test correo
	if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
		alert('ERROR: Debe escribir un correo válido');
		return false;
	}
 
	//Test fecha
	if(!isNaN(txtFecha)){
		alert('ERROR: Debe elegir una fecha');
		return false;
	}
 
	//Test comboBox
	if(cmbSelector == null || cmbSelector == 0){
		alert('ERROR: Debe seleccionar una opcion del combo box');
		return false;
	}
 
	//Test campo obligatorio
	if(txtMensaje == null || txtMensaje.length == 0 || /^\s+$/.test(txtMensaje)){
		alert('ERROR: El campo MENSAJE no debe ir vacío o lleno de solamente espacios en blanco');
		return false;
	}
		
//		var selected = combo.options[combo.selectedIndex].text;
		pgmElegido = combo.options[combo.selectedIndex].text;

	alert('Sr. ' + txtNombre + '. \n Su mensaje sobre el programa ' + pgmElegido + ' ha sido enviado exitosamente. Le contestaremos a la brevedad ');
	return true;
}
