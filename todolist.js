let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const tarefaInput = document.getElementById("tarefa");

// Enter adiciona tarefa
tarefaInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function adicionarTarefasNaLista() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        const li = document.createElement("li");
        li.className = "todo-item";

        if (tarefa.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.completed;

        checkbox.onchange = () => {
            tarefas[index].completed = checkbox.checked;
            atualizar();
        };

        const label = document.createElement("label");
        label.textContent = tarefa.text;

        const btn = document.createElement("button");
        btn.textContent = "🗑️";

        btn.onclick = () => {
            tarefas.splice(index, 1);
            atualizar();
        };

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(btn);

        lista.appendChild(li);
    });

    contador.textContent = tarefas.length;
}

function adicionarTarefa() {
    const texto = tarefaInput.value.trim();

    if (texto === "") return;

    tarefas.push({
        text: texto,
        completed: false
    });

    tarefaInput.value = "";
    atualizar();
}

function limparTarefas() {
    tarefas = [];
    atualizar();
}

function atualizar() {
    salvarTarefas();
    adicionarTarefasNaLista();
}

atualizar();