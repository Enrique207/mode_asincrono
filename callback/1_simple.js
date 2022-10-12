//dependencia a XMLHttpRequest
const http = require('xmlhttprequest').XMLHttpRequest


function exito(data){
    const tipos = JSON.parse(data).results
    //recorrer el arreglo 
    tipos.forEach(function (element) {
        console.log(`Tipo: ${element.name})`)
        console.log(`---------------------->`)
    });
}

function fallo(status){
    console.log(status)
}

const url = "https://pokeapi.co/api/v2/type"

//funcion para conectar a una API publica
function get_data(endpoint , exito , fallo){
    
    //1.Crear el objeto de conexion
    const h = new http()
    //2.Abrir una conexion a la API
    h.open('GET' , endpoint)
    //3.Enviar la request definida
     h.send()
     //4. una vez, recibida la respuesta,
     //  tratar la info
     h.onload = function(){
        exito(h.responseText)
    }
}
     //invocar get data
     get_data(url, exito, fallo)