// --------------------------Estrutura do For ------------------------------//
// Estrutura Padrão
for (let i=2; i<=10; i+=2){
    console.log("Linha", i)
}

const frutas = ["pera", "uva", "maçã"]
const pessoa = {
    nome: "Lucas",
    sobrenome: "Barros",
    idade: 19
}
// estrutura For In
for (let i in frutas){
    console.log(frutas[i])
}
// estrutura For In com Objeto
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}
// estrutura For Of (Não funciona em objetos)
for (let fruta of frutas){
    console.log(fruta)
}
// estrutura ForEach
frutas.forEach(function (valor, i, lista) {
    console.log(valor, i, lista)
});


