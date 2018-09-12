
//Traigo Datos
let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
let groupID = 'ejemplos';
let collectionID = 'nombres';
function getData(){
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
    let contenedor = document.querySelector("#result");
    contenedor.innerHTML = ''
    for (let data of json.nombres) {
      contenedor.innerHTML += data.thing.nombre + "<br />";
    }
  })
  .catch(function(e){
    console.log(e)
  })

}

document.querySelector("button").addEventListener('click', function(){
  getData();
})