const pessoa = {
  nome: 'Ana',
  idade: 5,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { logradouro, numero, cep } = pessoa.endereco
console.log(logradouro, numero, cep)