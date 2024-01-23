let data1 = new Date() // Retorna a data e hora atual
let data2 = new Date(0) // Constroi a data com base parâmetro em ms passado, sendo 0 = 01/01/1970
let data3 = new Date(2024, 2, 25, 14, 0) /* Constroi a data com base nos parâmetros numéricos seguindo a 
ordem A, M, d, hh, mm, ss, ms */
let data4 = new Date('2024-2-20T20:20:59:500') // Também é possível passar por string seguindo essa mascara 
let data5 = new Date('2024-2-20 20:20:59.500') // Também é possível passar por string seguindo essa mascara 
semana = ['doming']
console.log('Ano', data5.getFullYear())
console.log('Mês', data5.getMonth()+1) // o mês começa do 0
console.log('Dia', data5.getDate())
console.log('Hora', data5.getHours())
console.log('Min', data5.getMinutes())
console.log('Seg', data5.getSeconds())
console.log('Ms', data5.getMilliseconds())
console.log('Semana', data5.getDay())
