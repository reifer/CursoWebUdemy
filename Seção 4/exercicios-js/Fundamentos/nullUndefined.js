const a = {name: 'Teste'}
console.log(a)

const b = a
console.log(b)
b.name = 'Opa'
console.log(a, b)

let c = 3
let d = c
d++
console.log(c , d)

let valor
console.log(valor)

valor = null
//console.log(valor.toString()) - ypeError: Cannot read properties of null (reading 'toString')

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)