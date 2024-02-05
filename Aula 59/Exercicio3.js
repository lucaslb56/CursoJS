let fizzBuzz = (num) => {
    let resultado = "";
    if ((num % 3) === 0) resultado += "Fizz";
    if ((num % 5) === 0) resultado += "Buzz";
    if (typeof num != 'number') return "Not a Number";
    if (resultado === "") return num;
    return resultado;
}

console.log(fizzBuzz("Hhh"));