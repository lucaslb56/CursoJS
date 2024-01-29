let segs = 0
let timer;
let crom;
const cronometro = document.getElementById("relogio") 
const iniciar = document.getElementById("iniciar") 
const pausar = document.getElementById("pausar") 
const zerar = document.getElementById("zerar") 
console.log("iniciando")
function getCrom(segs){
    crom = new Date(segs*1000)

    cronometro.innerText = crom.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    })

}

function start() {
    cronometro.style.color = "black";
    timer = setInterval(() => {
        segs++;
        getCrom(segs);
    }, 1000);
    timer   
}

function pause(){
    clearInterval(timer);
    cronometro.style.color = "red";
}

function zera() {
    cronometro.style.color = "black";
    clearInterval(timer);
    segs = 0;
    getCrom(segs);
    
}

iniciar.addEventListener("click", function (event) {
    start();
})
pausar.addEventListener("click", function (event) {
    pause();
})
zerar.addEventListener("click", function (event) {
    zera();
})

