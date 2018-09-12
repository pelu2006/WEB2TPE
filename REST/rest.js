let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
//let groupID = 'ejemplos';
let groupID = '72';
//let collectionID = 'nombres';
let collectionID = 'tbHorarios';
//let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
//let groupID = 'ejemplos';
//let collectionID = 'nombres';

let contenedor = document.querySelector("#contenido");


function sendData(){
		console.log("subiendo");
//  let name = document.querySelector("#name").value;
  let horario = document.querySelector("#horario").value;
  let television = document.querySelector("#television").value;
  let radio = document.querySelector("#radio").value;
  let imgTV = document.querySelector("#imgTV").value;
  let imgRadio = document.querySelector("#imgRadio").value;

  if( horario.length === 0 ) {
    contenedor.innerHTML = "Ingrese un horario valido";
    return;
  }
  let data = {
    "thing": {
//    "tbHorarios": {
//      "nombre": name
	    "horario": horario,
		  "television": television,
		  "imgTV": imgTV,
		  "imgRadio": imgRadio,
		  "radio": radio

    }
  };
  fetch(baseURL + groupID + "/" + collectionID, {
    "method": "POST",
    "mode": 'cors',
    "headers": { "Content-Type": "application/json" },
    "body": JSON.stringify(data)
  }).then(function(r){
    if(!r.ok){
      console.log("error")
    }
    return r.json()
  })
  .then(function(json) {
    contenedor.innerHTML = JSON.stringify(json);
  })
  .catch(function(e){
    console.log(e)
  })

}

document.querySelector("button").addEventListener('click', sendData)



//Traigo Datos
//let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
//let groupID = 'ejemplos';
//let collectionID = 'nombres';
function getData(){
	console.log("trayendo");
  fetch(baseURL + groupID + "/" + collectionID, {
    method: "GET",
    mode: 'cors',
  }).then(function(r){
    if(!r.ok){
      console.log("error")
    }
    return r.json()
  })
  .then(function(json) {
    console.log(json);
    let contenedor2 = document.querySelector("#contenido");



	contenedor2.innerHTML = "<table class='centrada'><tr><th>Horario</th><th>Television</th><th>Radio</th><th></th></tr>";

    for (let data of json.tbHorarios) {
      //contenedor2.innerHTML += data.thing.horario + "<br />";
	  //contenedor2.innerHTML += data.thing.television + "<br />";
	  //contenedor2.innerHTML += data.thing.radio + "<br /><br />";
//	  contenedor2.innerHTML += "<table class='centrada'><tr><td>" + data.thing.horario + "<input type='text' id='iddd' placeholder='" +data.thing.id + "ff'>" + "</td><td><img class='pgm' src='" + data.thing.imgTV + "'/>" + data.thing.television + "</td><td><img class='pgm' src='" + data.thing.imgRadio + "'/>" + data.thing.radio + "</td><td><button type='button' id='button222' name='button222'>Eliminar</button><button type='button' id='button222' name='button222'>Modificar</button></td></tr></table>";
	  contenedor2.innerHTML += "<table class='centrada'><tr><td>" + data.thing.horario + "</td><td><img class='pgm' src='" + data.thing.imgTV + "'/>" + data.thing.television + "</td><td><img class='pgm' src='" + data.thing.imgRadio + "'/>" + data.thing.radio + "</td><td><button class='button' type='button' id='button222' name='button222'>Eliminar</button><button class='button' type='button' id='button222' name='button222'>Modificar</button></td></tr></table>";
//	  contenedor2.innerHTML += "<tr><td>" + data.thing.horario + "</td>";
////	  contenedor2.innerHTML += "<td><img class='pgm' src='" + data.thing.imgTV + "'/>" + data.thing.television + "</td>";
////	  contenedor2.innerHTML += "<td><img class='pgm' src='" + data.thing.imgRadio + "'/>" + data.thing.radio + "</td></tr>";
//	  contenedor2.innerHTML += "<td>" + data.thing.television + "</td>";
//	  contenedor2.innerHTML += "<td>" + data.thing.radio + "</td></tr>";
			console.log(data.thing._id + "_id");
    }
	contenedor2.innerHTML += "</table>";
//	var myImage = document.querySelector('.pgm');
//fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
//	.then(res => res.blob())
//	.then(res => {
//		var objectURL = URL.createObjectURL(res);
//		myImage.src = objectURL;
//});


  })
  .catch(function(e){
    console.log(e)
  })


}

document.querySelector("#button2").addEventListener('click', function(){
  getData();
})

//document.querySelector("button2").addEventListener('click', getData)




function sendData2(){
  let id = document.querySelector("#id").value;
  let horario = document.querySelector("#horario").value;
  let television = document.querySelector("#television").value;
  let radio = document.querySelector("#radio").value;
  let imgTV = document.querySelector("#imgTV").value;
  let imgRadio = document.querySelector("#imgRadio").value;

  if( horario.length === 0 || id.length === 0) {
    contenedor.innerHTML = "Ingrese un ID y nombre";
    return;
  }
  let data = {
    "thing": {
    "horario": horario,
	  "television": television,
	  "imgTV": imgTV,
	  "imgRadio": imgRadio,
	  "radio": radio

    }
  };
  fetch(baseURL + groupID + "/" + collectionID + "/" + id, {
    "method": "PUT",
    "mode": 'cors',
    "headers": { "Content-Type": "application/json" },
    "body": JSON.stringify(data)
  }).then(function(r){
    if(!r.ok){
      console.log("Error")
    }
    return r.json()
  })
  .then(function(json) {
    contenedor.innerHTML = JSON.stringify(json);
  })
  .catch(function(e){
    console.log(e)
  })
}

document.querySelector("#button3").addEventListener('click', sendData2)


function todos(){
	console.log("trayendo TODO");
  fetch(baseURL + groupID + "/" + collectionID, {
    method: "GET",
    mode: 'cors',
  }).then(function(r){
    if(!r.ok){
      console.log("error")
    }
    return r.json()
  })
  .then(function(json) {
    console.log(json);
    let contenedor2 = document.querySelector("#contenido");

	contenedor2.innerHTML = "";

//    for (let data of json.tbHorarios) {
		contenedor2.innerHTML += JSON.stringify(json) + "<br />";

//    }
//	contenedor2.innerHTML += "</table>";
  })
  .catch(function(e){
    console.log(e)
  })


}

document.querySelector("#button4").addEventListener('click', function(){
  todos();
})
