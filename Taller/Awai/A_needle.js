const needle = require('needle')

const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas"

const f = async()  =>{
    try {
        let response = await needle('get', url)
        const tipos = response.body
        tipos.forEach((element)=>{
            console.log(element.nome)
            console.log("-----------------")
        })
    } catch (error) {
        console.log(Error(error))
    }
}
f()