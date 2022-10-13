const axios = require('axios')

const url = "https://the-dune-api.herokuapp.com/books/7"

//configuracion de request
let config = {
    url : url,
    method : 'get'
}

//realizar la opreacion async
axios(config)
      .then(response => response.data)
        .then(data =>{
        data.forEach(function(tipo){
            console.log (`Libro: ${tipo.title}`)
            console.log(`-------------------`)
        })
      })
      .catch((error) => {
        console.log(Error(`Error : ${error}`))
      })