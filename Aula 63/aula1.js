let nome = "Lucas"
try {
   nome = "Pedro" 
} catch (error) {
    console.log("Deu erro ao mudar o nome")
}finally {
    console.log("O nome atual é", nome)
}