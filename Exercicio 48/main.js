const dataAtual = new Date();
const resultado = document.getElementById("resultado");
const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let diaSemana = dataAtual.getDay();
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth();
let ano = dataAtual.getFullYear();
let hora = dataAtual.getHours();
let minutos = dataAtual.getMinutes();

dia = dia < 10 ? `0${dia}` : dia;
hora = hora < 10 ? `0${hora}` : hora;
minutos = minutos < 10 ? `0${minutos}` : minutos;

resultado.innerText = `${diasSemana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano} ${hora}:${minutos}`;
