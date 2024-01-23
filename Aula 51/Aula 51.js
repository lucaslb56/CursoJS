// -------------------Atribuição por Desestruturação-----------------------------------//
// Com Arrays //
// Operador Rest ... Operador Spread ...
const numeros = [1, 2, 3, 4, 5, 6, 7 , 8]
let [um, dois, , quatro, ...resto] = numeros
console.log(resto)

// Com Objetos //
const pessoa = {
    nome: "Lucas",
    sobrenome: "barros",
    idade: 19,
    endereco: {
        rua: "Dom Luiz Soares",
        n: 47
    }
}

const {"nome": no='Desconhecido', "endereco": {rua, n}} = pessoa
console.log(no, n)



