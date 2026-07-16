function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
    console.log(obj.nome.toUpperCase() + "!!!")
    } catch(e) {
    tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Reinaldo'}
imprimirNomeGritando(obj)