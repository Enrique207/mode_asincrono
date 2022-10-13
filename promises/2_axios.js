const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuracion de request
let config ={
    url : url,
    method: 'get'
}

//realizar la operacion async
axios(config)
        .then(function(response){
            return response.data
        }).then(function(data){
            data.forEach(function(tipo){
                console.log(`Tipo: ${tipo.name}`)
                console.log(`<--------||------>`)
        } )
    })
        .catch(function(error){
           console.log(Error('Error : $error'))
    })
    const exito= data => {
        const tipos = JSON.parse(data)
        //recorrer el arreglo 
        tipos.forEach(function (element) {
            console.log(`Tipo: ${element.name})`)
            console.log(`---------------------->`)
        });
    }
    false()