let form = document.getElementById("form");

form.addEventListener('submit', function (e) {
  e.preventDefault()
  let peso = Number(document.getElementById("peso").value);
  let altura = Number(document.getElementById("altura").value);
  let resultado;
  let divResultado;
  let imc = peso /(altura * altura);
  imc = imc.toFixed(2);
  console.log(imc)
  if (imc >= 40) {
    resultado = "Obesidade grau 3";
    classe = "paragrafo-resultado bad"
  } else if (imc >= 35) {
    resultado = "Obesidade grau 2";
    classe = "paragrafo-resultado bad"
  } else if (imc >= 30) {
    resultado = "Obesidade grau 1";
    classe = "paragrafo-resultado bad"
  } else if (imc >= 25) {
    resultado = "Sobrepeso";
    classe = "paragrafo-resultado bad"
  } else if (imc >= 18.5) {
    resultado = "Peso Normal";
    classe = "paragrafo-resultado"
  } else {
    resultado = "Abaixo do peso"
    classe = "paragrafo-resultado bad"
  }

  divResultado = document.getElementById("resultado")
  divResultado.innerHTML = `<p class="${classe}">Seu IMC é ${imc}, indicando ${resultado}</p>`
});
