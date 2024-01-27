function getBigger(listaNumeros = []) 
{
    let maior = 0;
    for (numero of listaNumeros){
        if (numero > maior){
            maior = numero;
        }
    }
    return maior
}

let getBiggerSimple = (num1, num2) =>  num1 > num2 ? num1 : num2;


console.log(getBigger([3,8,1,4,5,7,9,2, 7, 6, 4]))

console.log(getBiggerSimple(5, 8))