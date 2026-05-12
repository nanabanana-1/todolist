let tarefas = [];
const contador = document.getElementById('contador');
const lista = document.getElementById('lista');
function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefa = tarefaInput.value.trim();
    if (tarefa) {
        tarefas.push(tarefa);
        tarefaInput.value = '';
        atualizarLista();
    }
}
function atualizarLista() {
    lista.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        const itemLeft = document.createElement('div');
        itemLeft.className = 'todo-item-left';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => {
            li.classList.toggle('completed');
        };
        const label = document.createElement('label');
        label.textContent = tarefa;
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
    contador.textContent = `Total de tarefas: ${tarefas.length}`;
}
function limparTarefas() {
    tarefas = [];
    atualizarLista();
}
