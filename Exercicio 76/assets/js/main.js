function initCaluladora() {
    return {
        visor: document.getElementsByClassName("visor"),
        insertVisor(texto){
            self.visor.innerText += texto;
        },
        digitar() {
            document.addEventListener("click", function (e) {
                el = e.target;
                if (el.classList.contains('btn-num')){
                    self.insertVisor(el.innerText)
                }
            })
        }
    }
}

calc = initCaluladora()
calc.digitar()