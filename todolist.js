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
        li.textContent = tarefa;
        const excluirBtn = document.createElement('button');
        excluirBtn.textContent = 'Excluir';
        excluirBtn.onclick = () => {
            tarefas.splice(index, 1);
            atualizarLista();
        };
        li.appendChild(excluirBtn);
        lista.appendChild(li);
    });
    contador.textContent = `Total de tarefas: ${tarefas.length}`;
}
