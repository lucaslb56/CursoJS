const btAdicionar = document.getElementById("adicionar")
const inpTarefa = document.getElementById("tarefa")
const listaTarefas = document.getElementById("listaTarefas")
let contador = 0;

function salvarTarefas() {
    NodeTarefas = listaTarefas.querySelectorAll('td')
    console.log(NodeTarefas)
    tarefas = []
    for (let td of NodeTarefas){
        tarefa = td.innerText;
        if (tarefa !== "Apagar"){
            tarefas.push(tarefa)
        }
    }
    console.log(tarefas)
}
function adicionar() {
    contador++;
    txtTarefa = inpTarefa.value;
    linhaTarefa = `<tr>
                        <td>${txtTarefa}</td>
                        <td><button  onclick="apagar(this)">Apagar</button></td>
                    </tr>`;
    listaTarefas.innerHTML += linhaTarefa;
}

btAdicionar.addEventListener("click", (e) => adicionar())

let apagar = (el) => el.parentElement.parentElement.remove() 
