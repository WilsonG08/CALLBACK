function dividir (x, y){
    return new Promise(function (resolve, reject){
        if (y === 0 ) return reject(new Error('No se puede dividir entre cero!'))

        return resolve( x / y)
    })
}


var promise = dividir(64, 2)

promise
.then( function (resultado){
    console.log(resultado)
    return dividir (resultado, 2)
})
.then(function (res){
    console.log(res)
})
.catch(function (err){
    console.log(err)
})


