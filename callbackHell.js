function dividir (x, y, cb){
    if (y === 0 ) return cb(new Error('No se puede dividir entre cero!'))

    cb(null, x / y)
}

dividir(20, 2, function(error, resultado){
    if(error) throw error
    dividir(resultado, 2, function (err, res){
        if (err) throw err
        dividir(res, 2, function (e, r){
            if (e) throw e
            console.log(r)
        })
    })
})