const nome = "Lucas";

try {
    nome = "Pedro";
    console.log(nome); 
}catch(e){
    console.log(" A variavel é uma constante!")
    console.log(e)
}

function soma(x, y) {
    if (typeof x !== "number" || y !== "number") {
        throw("X e Y precisam ser numericos")
    }
    return x + y;    
}

soma('11', 2);