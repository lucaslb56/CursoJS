const btAdicionar = document.getElementById("adicionar")
const inpTarefa = document.getElementById("tarefa")
const listaTarefas = document.getElementById("listaTarefas")
let contador = 0;

function adicionar() {
    contador++;
    txtTarefa = inpTarefa.value;
    linhaTarefa = `<tr id="T${contador}">
                        <td>${contador}</td>
                        <td>${txtTarefa}</td>
                        <td><button  onclick="apagar(${contador})">Apagar</button></td>
                    </tr>`;
    listaTarefas.innerHTML += linhaTarefa;
}

btAdicionar.addEventListener("click", (e) => {
    adicionar();
})

function apagar(id) {
    document.getElementById("T"+id).remove()
    
}