// Gestão de Recursos
const listaRecursos = document.getElementById("lista-recursos");
const totalRecursos = document.getElementById("total-recursos");
const $bnt = document.getElementById("btn_adicionar")

function adicionarRecurso() {
    const recursoSelect = document.getElementById("item_select");
    const recurso = recursoSelect.value.trim();

    if (recurso) {
        // Cria o item da lista
        const li = document.createElement("li");
        li.innerHTML = `${recurso} <select><option value="em_operacao">Em operação</option><option value="em_manutencao">Em manutenção</option></select> <button onclick="removerRecurso(this)">Remover</button>`;
        
        // Adiciona à lista
        listaRecursos.appendChild(li);

        // Atualiza o total de recursos
        atualizarDashboard();

        // Limpa o input
        recursoInput.value = "";
    }
}

function removerRecurso(botao) {
    botao.parentElement.remove();
    atualizarDashboard();
}

function atualizarDashboard() {
    const total = listaRecursos.children.length;
    totalRecursos.textContent = total;

    const status = document.getElementById("status-seguranca");
    if (total < 10){
        status.textContent = "Ocupação Normal.";
        status.style.color = "lightgreen";
        $bnt.disabled = false
    }else if (total >= 10 && total <= 15) {
        status.textContent = "Atenção: Muitos Recursos!";
        status.style.color = "orange";
        $bnt.disabled = false
    } else {
        status.textContent = "Atenção: Estoque Cheio!";
        status.style.color = "red"; 
        $bnt.disabled = true
    }
}