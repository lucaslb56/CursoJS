/*variaveis primitivas são imutaveis e são copiados quando referenciados (number, string, boolean, null, bigint,
 undefined)
 Já variáveis não primitivas são mutáveis e copiam somente a referência um do outro
 */

// strExp = "exemplo de uma string"
// console.log(strExp[1])
// strExp[1] = "#" // Não é permitido
// console.log(strExp[1])

b = [1, 2, 3]
a = b // agora os dois apontam para o mesmo local, qualquer mudança em a afeta b e vice versa
c = [...b] // desse modo c recebe uma copia de b

