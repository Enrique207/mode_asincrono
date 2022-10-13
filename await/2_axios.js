const axios = require('axios')

const url = "https://pokeapi.co/api/v2/type"

//configuracion de request
let config ={
    url : url,
    method: 'get'
}

const f = async() =>{
    try{
        let response = await axios(config)
        const tipos =response.data.results
        tipos.forEach((element)=>{
    console.log(element.name)
    console.log('YOSHAAAAAA')
    })
}catch (error){
        console.log (Error(error))
}
}

const exito= data => {
    const tipos = JSON.parse(data).results
    //recorrer el arreglo 
    tipos.forEach(function (element) {
        console.log(`Tipo: ${element.name})`)
        console.log(`---------------------->`)
    });
}
f()