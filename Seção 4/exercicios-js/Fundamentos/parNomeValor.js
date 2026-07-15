// Par Nome/Valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Reinaldo',
    idade: 46,
    endereco: {
        logradouro: 'Rua do lado de casa',
        numero: 100
    }
}

console.log(saudacao)
console.log(exec)
console.log(cliente)