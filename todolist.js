let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
const contador = document.getElementById('contador');
const lista = document.getElementById('lista');

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
document.getElementById('adicionar').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefa = tarefaInput.value.trim();
    if (tarefa) {
        tarefas.push({text: tarefa, completed: false});
        tarefaInput.value = '';
        atualizarLista();
    }
}
function atualizarLista() {
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        if (tarefa.completed) {
            li.classList.add('completed');
        }
        const itemLeft = document.createElement('div');
        itemLeft.className = 'todo-item-left';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.completed;
        checkbox.onchange = () => {
            tarefa.completed = checkbox.checked;
            li.classList.toggle('completed');
            salvarTarefas();
        };
        const label = document.createElement('label');
        label.textContent = tarefa.text;
        itemLeft.appendChild(checkbox);
        itemLeft.appendChild(label);
        li.appendChild(itemLeft);
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = '🗑️';
        excluirBtn.onclick = () => {
            tarefas.splice(index, 1);
            atualizarLista();
        };
        li.appendChild(excluirBtn);
        lista.appendChild(li);
    });
    contador.textContent = tarefas.length;
    salvarTarefas();
}
function limparTarefas() {
    tarefas = [];
    atualizarLista();
}
